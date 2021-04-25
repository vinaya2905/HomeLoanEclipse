package com.cg.homeloan.util;

import org.springframework.stereotype.Component;

import com.cg.homeloan.dto.UserDetails;
import com.cg.homeloan.entities.User;

@Component
public class UserUtil {
	public UserDetails toDetails(User user)
	{
		UserDetails ud=new UserDetails(user);
		return ud;
		
	}
}
