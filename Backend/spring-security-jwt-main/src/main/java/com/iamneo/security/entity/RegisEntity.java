package com.iamneo.security.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Student_detail")
public class RegisEntity {
	@Id
			

	@Column(name="firstName")
	private String firstName;
	
@Column(name="lastName")
private String lastName;
@Column(name="email")
private String email;
@Column(name="password")
private String password;
@Column(name="confirmPassword")
private String confirmPassword;

public RegisEntity(String firstName, String lastName, String email, String password,String confirmPassword) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.confirmPassword=confirmPassword;
}
public String getFirstName() {
	return firstName;
}
public void setFullName(String fullName, String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getConfirmPassword() {
	return confirmPassword;
}
public void setConfirmPassword(String confirmPassword) {
	this.confirmPassword = confirmPassword;
}

public RegisEntity() {
}
}
