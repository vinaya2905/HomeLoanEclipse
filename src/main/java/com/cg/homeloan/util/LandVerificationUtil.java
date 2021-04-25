package com.cg.homeloan.util;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.cg.homeloan.dto.LandVerificationOfficerDetails;
import com.cg.homeloan.dto.UserDetails;
import com.cg.homeloan.entities.LandVerificationOfficer;
import com.cg.homeloan.entities.User;

@Component
public class LandVerificationUtil {
	public LandVerificationOfficerDetails toDetails(LandVerificationOfficer landOfficer) {
		Set<User> users = landOfficer.getUsers();
		Set<UserDetails> details = new HashSet<>();
		for (User user : users) {
			details.add(new UserDetails(user));
		}
		LandVerificationOfficerDetails lDetails = new LandVerificationOfficerDetails(landOfficer.getUserId(),
				landOfficer.getOfficerName(), landOfficer.getOfficerContact(), details);
		return lDetails;
	}

	public List<LandVerificationOfficerDetails> toDetails(List<LandVerificationOfficer> list) {
		List<LandVerificationOfficerDetails> lDetails=new ArrayList<>();
		for(LandVerificationOfficer lList:list)
		{
			lDetails.add(toDetails(lList));
		}
		return lDetails;
	}
}