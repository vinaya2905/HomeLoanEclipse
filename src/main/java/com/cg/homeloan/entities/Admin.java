package com.cg.homeloan.entities;

public class Admin {

	private int userId;
	private String adminName;
	private String adminContact;

	public Admin() {

	}

	public Admin(int userId, String adminName, String adminContact) {

		this.userId = userId;
		this.adminName = adminName;
		this.adminContact = adminContact;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminContact() {
		return adminContact;
	}

	public void setAdminContact(String adminContact) {
		this.adminContact = adminContact;
	}

	@Override
	public String toString() {
		return "Admin [userId=" + userId + ", adminName=" + adminName + ", adminContact=" + adminContact + "]";
	}

}
