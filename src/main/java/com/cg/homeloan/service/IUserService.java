package com.cg.homeloan.service;

import com.cg.homeloan.entities.User;

public interface IUserService {
	public User addNewUser(User user);

	public User signIn(User user);

	public User signOut(User user);

	
}
