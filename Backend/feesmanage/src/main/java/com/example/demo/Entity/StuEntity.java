package com.example.demo.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Student_details11")
public class StuEntity {
	@Id
			

	@Column(name="name")
	private String name;
	
@Column(name="fees")
private Double fees;

public StuEntity(String name,Double fees) {
	super();
	this.name = name;
	this.fees = fees;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Double getFees() {
	return fees;
}
public void setFees(Double fees) {
	this.fees = fees;
}

public StuEntity() {
}
}
