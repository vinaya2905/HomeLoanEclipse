package com.cg.homeloan.util;

/**
 * 
 * @author VINAYA SREE
 *
 */

import org.springframework.stereotype.Component;

import com.cg.homeloan.dto.AdminDetails;
import com.cg.homeloan.dto.UserAdminDetails;
import com.cg.homeloan.entities.Admin;
import com.cg.homeloan.entities.User;

@Component
public class UserAdminUtil {
	public UserAdminDetails toDetails(User user) {
		Admin admin = user.getAdmin();
		AdminDetails adminDetails = new AdminDetails(admin);
		UserAdminDetails ud = new UserAdminDetails(user.getUserId(), user.getPassword(), user.getRole(), adminDetails);
		return ud;

	}
}
