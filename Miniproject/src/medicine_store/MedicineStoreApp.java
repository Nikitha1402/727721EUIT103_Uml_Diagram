package medicine_store;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

abstract class Medicine {
    private String name;
    private double price;
    private int stock;

    public Medicine(String name, double price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "Medicine [name=" + name + ", price=" + price + ", stock=" + stock + "]";
    }

    // Abstract method to be implemented by subclasses
    public abstract int getQuantity();
}

class Bill extends Medicine {
    private int quantity;

    public Bill(String name, double price, int stock, int quantity) {
        super(name, price, stock);
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getTotalPrice() {
        return getPrice() * quantity;
    }

    @Override
    public String toString() {
        return super.toString() + ", quantity=" + quantity + ", total price=$" + getTotalPrice();
    }
}

public class MedicineStoreApp {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/medicine_store";
    private static final String USER = "root";
    private static final String PASS = "Nikhi$123";

    public static void main(String[] args) {
        Connection connection = null;
        List<Medicine> medicines = new ArrayList<>();
        List<Bill> cart = new ArrayList<>();
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);

        // Open a connection to the database
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(DB_URL, USER, PASS);
            System.out.println("Connected to the database.");

            // Prompt the user to enter details for each medicine
            System.out.print("Enter the number of medicines to add: ");
            int numMedicines = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            for (int i = 0; i < numMedicines; i++) {
                System.out.println("Enter details for Medicine " + (i + 1) + ":");
                System.out.print("Name: ");
                String name = scanner.nextLine();
                System.out.print("Price: ");
                double price = scanner.nextDouble();
                System.out.print("Stock: ");
                int stock = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                Medicine medicine = new Medicine(name, price, stock) {
                    // Anonymous inner class to implement the abstract method
                    @Override
                    public int getQuantity() {
                        return 0; // Not applicable for Medicine, implementation required in subclasses
                    }
                };
                medicines.add(medicine);
            }

            // Insert each medicine into the database
            for (Medicine medicine : medicines) {
                insertMedicine(connection, medicine);
            }

            int choice;
            do {
                System.out.println("--------- Medicine Store Menu ---------");
                System.out.println("1. Add Medicine to Cart");
                System.out.println("2. View Cart");
                System.out.println("3. Generate Bill and Exit");
                System.out.println("--------------------------------------");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        System.out.println("--------- Medicine Inventory ---------");
                        for (int i = 0; i < medicines.size(); i++) {
                            System.out.println((i + 1) + ". " + medicines.get(i));
                        }
                        System.out.println("--------------------------------------");
                        System.out.println("Enter the index of the medicine to add to cart: ");
                        int index = scanner.nextInt();
                        if (index >= 1 && index <= medicines.size()) {
                            Medicine selectedMedicine = medicines.get(index - 1);
                            System.out.println("Enter the quantity to purchase: ");
                            int quantity = scanner.nextInt();
                            if (selectedMedicine.getStock() >= quantity) {
                                cart.add(new Bill(selectedMedicine.getName(), selectedMedicine.getPrice(), selectedMedicine.getStock(), quantity));
                                selectedMedicine.setStock(selectedMedicine.getStock() - quantity);
                                System.out.println("Medicine added to cart.");
                            } else {
                                System.out.println("Insufficient stock for " + selectedMedicine.getName());
                            }
                        } else {
                            System.out.println("Invalid index. Please try again.");
                        }
                        break;
                    case 2:
                        System.out.println("--------- Cart ---------");
                        for (Bill bill : cart) {
                            System.out.println(bill);
                        }
                        System.out.println("-----------------------");
                        break;
                    case 3:
                        generateBillAndStore(cart, connection);
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            } while (choice != 3);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    // Method to insert a new Medicine record into the database
    private static void insertMedicine(Connection connection, Medicine medicine) throws SQLException {
        String query = "INSERT INTO medicine (name, price, stock) VALUES (?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            preparedStatement.setString(1, medicine.getName());
            preparedStatement.setDouble(2, medicine.getPrice());
            preparedStatement.setInt(3, medicine.getStock());

            int rowsInserted = preparedStatement.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("Medicine record inserted successfully: " + medicine);
            } else {
                System.out.println("Failed to insert the medicine record: " + medicine);
            }
        }
    }

    // Method to generate the bill and insert billing details into the database
    private static void generateBillAndStore(List<Bill> cart, Connection connection) throws SQLException {
        double totalAmount = 0;
        for (Bill bill : cart) {
            totalAmount += bill.getTotalPrice();
        }

        System.out.println("--------- Bill Receipt ---------");
        for (Bill bill : cart) {
            System.out.println("Medicine: " + bill.getName());
            System.out.println("Price per unit: $" + bill.getPrice());
            System.out.println("Quantity: " + bill.getQuantity());
            System.out.println("--------------------------------");
        }
        System.out.println("Total Amount: $" + totalAmount);
        System.out.println("------------------------------");

        // Insert billing details into the database
        String query = "INSERT INTO billing (medicine_name, price_per_unit, quantity, total_amount) VALUES (?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
            for (Bill bill : cart) {
                preparedStatement.setString(1, bill.getName());
                preparedStatement.setDouble(2, bill.getPrice());
                preparedStatement.setInt(3, bill.getQuantity());
                preparedStatement.setDouble(4, totalAmount);
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
