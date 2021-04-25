package com.cg.homeloan.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="landofficer_details")
public class LandVerificationOfficer {
	
	@Id
	@GeneratedValue
	private int userId;
	private String officerName;
	private String officerContact;
	
	@OneToMany(targetEntity = User.class,mappedBy="lOfficer",cascade = CascadeType.ALL)
	private Set<User> users=new HashSet<>();
	public LandVerificationOfficer() {
	
	}
	public LandVerificationOfficer(String officerName, String officerContact) {
		
		this.officerName = officerName;
		this.officerContact = officerContact;
	}
	
	
	public void addUsers(User user)
	{
		user.setlOfficer(this);
		users.add(user);
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
	
	
	public Set<User> getUsers() {
		return users;
	}
	public void setUsers(Set<User> users) {
		this.users = users;
	}
	@Override
	public String toString() {
		return "LandVerificationOfficer [userId=" + userId + ", officerName=" + officerName + ", officerContact="
				+ officerContact + "]";
	}
	
	

}
