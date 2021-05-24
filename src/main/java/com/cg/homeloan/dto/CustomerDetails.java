package com.cg.homeloan.dto;

import java.time.LocalDate;

import com.cg.homeloan.entities.Customer;

/**
 * 
 * @author VINAYA SREE
 *
 */

public class CustomerDetails {
	private String cust_id;
	private String customerName;
	private String mobileNumber;
	private String emailId;
	private LocalDate dateOfBirth;
	private String gender;
	private String nationality;
	private String aadharNumber;
	private String panNumber;

	private UserDetails user;

	public CustomerDetails() {
		super();

	}

	public CustomerDetails(String cust_id, String customerName, String mobileNumber, String emailId,
			LocalDate dateOfBirth, String gender, String nationality, String aadharNumber, String panNumber,
			UserDetails user) {
		super();
		this.cust_id = cust_id;
		this.customerName = customerName;
		this.mobileNumber = mobileNumber;
		this.emailId = emailId;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.nationality = nationality;
		this.aadharNumber = aadharNumber;
		this.panNumber = panNumber;
		this.user = user;
	}

	public CustomerDetails(Customer cust) {
		this.cust_id = cust.getUserId();
		this.customerName = cust.getCustomerName();
		this.mobileNumber = cust.getMobileNumber();
		this.emailId = cust.getEmailId();
		this.dateOfBirth = cust.getDateOfBirth();
		this.gender = cust.getGender();
		this.nationality = cust.getNationality();
		this.aadharNumber = cust.getAadharNumber();
		this.panNumber = cust.getPanNumber();
		this.user = new UserDetails(cust.getUser());
	}

	

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public UserDetails getUser() {
		return user;
	}

	public void setUser(UserDetails user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "CustomerDetails [cust_id=" + cust_id + ", customerName=" + customerName + ", mobileNumber=" + mobileNumber
				+ ", emailId=" + emailId + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender + ", nationality="
				+ nationality + ", aadharNumber=" + aadharNumber + ", panNumber=" + panNumber + ", user=" + user + "]";
	}

}
