package com.cg.homeloan.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.homeloan.dto.CreateUser;
import com.cg.homeloan.dto.UserDetails;
import com.cg.homeloan.entities.User;
import com.cg.homeloan.exception.UserNotFoundException;
import com.cg.homeloan.service.IUserService;
import com.cg.homeloan.util.UserUtil;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {
	
	@Autowired
	private IUserService service;
	
	@Autowired
	private UserUtil userUtil;
	
	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping("/add")
	public UserDetails addNewUser(@RequestBody @Valid CreateUser reqData )
	{
		User user=new User(reqData.getUserId(),reqData.getPassword(),reqData.getRole());
		
		User us=service.addNewUser(user);
		UserDetails details=userUtil.toDetails(user);
		
		return details;
	}
		
	@GetMapping("/signIn")
	public User signIn(@RequestBody User user) {
		
		User us=service.signIn(user);
		if(!user.getPassword().equals(us.getPassword()))
			throw new UserNotFoundException("Wrong password entered!!");
		return us;
		
		
	}
	
}