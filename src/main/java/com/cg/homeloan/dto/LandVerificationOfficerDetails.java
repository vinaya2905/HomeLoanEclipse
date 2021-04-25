package com.cg.homeloan.dto;

import java.util.Set;

public class LandVerificationOfficerDetails {
	private int userId;
	private String officerName;
	private String officerContact;
	private Set<UserDetails> users;
	
	public LandVerificationOfficerDetails() {
		
	}

	public LandVerificationOfficerDetails(int userId, String officerName, String officerContact,
			Set<UserDetails> users) {
		super();
		this.userId = userId;
		this.officerName = officerName;
		this.officerContact = officerContact;
		this.users = users;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

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
		return "LandVerificationOfficerDetails [userId=" + userId + ", officerName=" + officerName + ", officerContact="
				+ officerContact + ", users=" + users + "]";
	}
	
	
}
