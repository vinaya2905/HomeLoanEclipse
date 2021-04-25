package com.cg.homeloan.dto;

import java.util.Set;

public class CreateFinanceVerificationRequest {
	
	private String finOfficerName;
	private String finOfficerContact;
	private Set<UserDetails> users;

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
		return users;
	}
	public void setUsers(Set<UserDetails> users) {
		this.users = users;
	}
	@Override
	public String toString() {
		return "CreateFinanceVerificationRequest [ finOfficerName=" + finOfficerName
				+ ", finOfficerContact=" + finOfficerContact + ", users=" + users + "]";
	}
	
	
	
}
