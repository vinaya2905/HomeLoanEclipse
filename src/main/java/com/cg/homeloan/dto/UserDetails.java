package com.cg.homeloan.dto;


import com.cg.homeloan.entities.User;
public class UserDetails {
	
	private int userId;
	private String password;
	private String role;
	public UserDetails() {
		
	}
	public UserDetails(int userId,  String password, String role) {
		super();
		this.userId = userId;
		this.password = password;
		this.role = role;
	}
	public UserDetails(User user) {
		this.userId=user.getUserId();
		this.password=user.getPassword();
		this.role=user.getRole();
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserDetails [userId=" + userId + ", password=" + password + ", role=" + role + "]";
	}
	
	
	
	
	
}
