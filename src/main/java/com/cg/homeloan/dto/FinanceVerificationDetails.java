package com.cg.homeloan.dto;
import java.util.Set;
public class FinanceVerificationDetails {
	private int userId;
	private String finOfficerName;
	private String finOfficerContact;
	private Set<UserDetails> details;
	public FinanceVerificationDetails() {
		
	}
	public FinanceVerificationDetails(int userId, String finOfficerName, String finOfficerContact, Set<UserDetails> details) {
		super();
		this.userId = userId;
		this.finOfficerName = finOfficerName;
		this.finOfficerContact = finOfficerContact;
		this.details = details;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFinOfficerName() {
		return finOfficerName;
	}
	public void setFinOfficerName(String finOfficerName) {
		this.finOfficerName = finOfficerName;
	}
	public String getFinOfficerContact() {
		return finOfficerContact;
	}
	public void setFinOfficerContact(String finOfficerContact) {
		this.finOfficerContact = finOfficerContact;
	}
	public Set<UserDetails> getUsers() {
		return details;
	}
	public void setUsers(Set<UserDetails> details) {
		this.details = details;
	}
	@Override
	public String toString() {
		return "FinanceVerificationDetails [userId=" + userId + ", finOfficerName=" + finOfficerName
				+ ", finOfficerContact=" + finOfficerContact  + "]";
	}
	
	
	
}