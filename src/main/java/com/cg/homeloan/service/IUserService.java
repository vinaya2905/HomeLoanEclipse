package com.cg.homeloan.service;

import com.cg.homeloan.entities.User;
import com.cg.homeloan.exception.CustomerNotFoundException;
import com.cg.homeloan.repository.IUserRepository;

public interface IUserService {
	public User addNewUser(User user);

	public User signIn(User user) ;

	public User signOut(User user);
}
