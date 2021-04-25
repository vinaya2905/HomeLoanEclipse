package com.cg.homeloan.util;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.cg.homeloan.dto.FinanceVerificationDetails;
import com.cg.homeloan.dto.UserDetails;
import com.cg.homeloan.entities.FinanceVerificationOfficer;
import com.cg.homeloan.entities.User;

@Component
public class FinanceVerificationUtil {
	public FinanceVerificationDetails toDetails(FinanceVerificationOfficer finOfficer)
	{
		Set<User> users=finOfficer.getUsers();
		Set<UserDetails> details=new HashSet<>();
		for(User user:users)
		{
			details.add(new UserDetails(user));
		}
		FinanceVerificationDetails fDetails=new FinanceVerificationDetails(finOfficer.getUserId(),finOfficer.getFinOfficerName(),finOfficer.getFinOfficerContact(),details);
				
		return fDetails ;
	}
	public List<FinanceVerificationDetails> toDetails(List<FinanceVerificationOfficer> list)
	{
		List<FinanceVerificationDetails> fDetails=new ArrayList<>();
		for(FinanceVerificationOfficer flist:list)
		{
			fDetails.add(toDetails(flist));
		}
		return fDetails;
		
	}
	
}
