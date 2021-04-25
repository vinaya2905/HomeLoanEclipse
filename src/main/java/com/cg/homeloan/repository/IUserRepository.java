package com.cg.homeloan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.homeloan.entities.User;

public interface IUserRepository extends JpaRepository<User, Integer> {

	//List<User> findById(int id);
	
}
