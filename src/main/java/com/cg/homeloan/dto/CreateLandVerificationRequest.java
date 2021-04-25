package com.cg.homeloan.dto;

import java.util.Set;

public class CreateLandVerificationRequest {
	private String officerName;
	private String officerContact;
	private Set<UserDetails> users;
	
	public String getOfficerName() {
		return officerName;
	}
	public void setOfficerName(String officerName) {
		this.officerName = officerName;
	}
	public String getOfficerContact() {
		return officerContact;
	}
	public void setOfficerContact(String officerContact) {
		this.officerContact = officerContact;
	}
	public Set<UserDetails> getUsers() {
		return users;
	}
	public void setUsers(Set<UserDetails> users) {
		this.users = users;
	}
	@Override
	public String toString() {
		return "CreateLandVerificationRequest [officerName=" + officerName + ", officerContact=" + officerContact
				+ ", users=" + users + "]";
	}
	
	
}
