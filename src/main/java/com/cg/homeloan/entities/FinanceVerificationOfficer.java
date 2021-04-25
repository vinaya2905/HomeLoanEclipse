package com.cg.homeloan.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="financeofficer_details")
public class FinanceVerificationOfficer {
	
	@Id
	@GeneratedValue
	
	private int userId;
	private String finOfficerName;
	private String finOfficerContact;
	
	@OneToMany(targetEntity = User.class, mappedBy="officer",cascade = CascadeType.ALL)
	private Set<User> users=new HashSet<>();
	
	public FinanceVerificationOfficer() {
	}
	
	public FinanceVerificationOfficer(String finOfficerName, String finOfficerContact) {		
		this.finOfficerName = finOfficerName;
		this.finOfficerContact = finOfficerContact;
	}

	public void addUsers(User user)
	{
		user.setOfficer(this);
		users.add(user);
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

	

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "FinanceVerificationOfficer [userId=" + userId + ", finOfficerName=" + finOfficerName
				+ ", finOfficerContact=" + finOfficerContact + ", users=" + users + "]";
	}
	
	
	
}
