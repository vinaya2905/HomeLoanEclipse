package com.cg.homeloan.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.homeloan.dto.CreateLandVerificationRequest;
import com.cg.homeloan.dto.CreateLoanApplicationRequest;
import com.cg.homeloan.dto.CustomerDetails;
import com.cg.homeloan.dto.LandVerificationOfficerDetails;
import com.cg.homeloan.dto.LoanApplicationDetails;
import com.cg.homeloan.dto.UserDetails;
import com.cg.homeloan.entities.Customer;
import com.cg.homeloan.entities.LandVerificationOfficer;
import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.entities.User;
import com.cg.homeloan.service.ILandVerificationService;
import com.cg.homeloan.util.LandVerificationUtil;
import com.cg.homeloan.util.LoanApplicationUtil;

@RestController
@RequestMapping("/landverification")
public class LandVerificationController {
	@Autowired
	private ILandVerificationService service;
	@Autowired
	private LoanApplicationUtil lUtil;
	@Autowired
	private LandVerificationUtil landUtil;
	@PutMapping("/update")
	public LoanApplicationDetails updateStatus(@RequestBody CreateLoanApplicationRequest loanApplication)
	{
		System.out.println("requested Data "+loanApplication);
		LoanApplication loanApp=new LoanApplication(loanApplication.getApplicationId(),loanApplication.getApplicationDate(),loanApplication.getLoanAppliedAmount(),loanApplication.getLoanApprovedAmount(),loanApplication.isLandVerificationApproval(),loanApplication.isFinanceVerificationApproval(),loanApplication.isAdminApproval(),loanApplication.getStatus());
		CustomerDetails customerDetails=loanApplication.getCustomer();
		System.out.println("requested Customer Data"+customerDetails);
		Customer cust=new Customer(customerDetails);
		UserDetails ud=customerDetails.getUser();
		User user=new User(ud);
		user.setCustomer(cust);
		cust.setUser(user);
		cust.setLoanApplication(loanApp);
		loanApp.setCustomer(cust);
		System.out.println(loanApp);
		LoanApplication newLoanApp=service.updateStatus(loanApp);
		LoanApplicationDetails details=lUtil.toDetails(newLoanApp);
		System.out.println("updated Data "+newLoanApp);
		return details;
	}
	
	@ResponseStatus(code=HttpStatus.CREATED)
	@PostMapping("/add")
	public LandVerificationOfficerDetails addofficer(@RequestBody CreateLandVerificationRequest reqData)
	{
		System.out.println("reqData "+reqData);
		LandVerificationOfficer landOfficer=new LandVerificationOfficer(reqData.getOfficerName(),reqData.getOfficerContact());
		Set<UserDetails> users=reqData.getUsers();
		if(users!=null)
		{
			for(UserDetails usd:users)
			{
				User user=new User(usd);
				user.setlOfficer(landOfficer);
				landOfficer.addUsers(user);
			}
		}
		System.out.println("Land Officer "+landOfficer);
		LandVerificationOfficer lOfficer=service.addOfficer(landOfficer);
		LandVerificationOfficerDetails details=landUtil.toDetails(lOfficer);
		return details;
	}
}
