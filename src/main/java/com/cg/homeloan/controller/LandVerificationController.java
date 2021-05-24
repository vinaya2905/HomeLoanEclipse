package com.cg.homeloan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
import com.cg.homeloan.service.ILoanApplicationService;
import com.cg.homeloan.util.LandVerificationUtil;
import com.cg.homeloan.util.LoanApplicationUtil;

/**
 * 
 * @author VINAYA SREE
 *
 */

@RestController
@RequestMapping("/landverification")
public class LandVerificationController {
	@Autowired
	private ILandVerificationService service;
	@Autowired
	private LoanApplicationUtil lUtil;
	@Autowired
	private LandVerificationUtil landUtil;
	@Autowired
	private ILoanApplicationService lservice;

	@ResponseStatus(code=HttpStatus.OK)
	@PutMapping("/update/{id}")
	public LoanApplicationDetails updateStatus(@PathVariable("id") Long id,@RequestBody CreateLoanApplicationRequest loanApplication) {
		System.out.println("requested Data " + loanApplication);
		loanApplication.setApplicationId(id);
		LoanApplication loanApp = new LoanApplication(loanApplication.getApplicationId(),
				loanApplication.getApplicationDate(), loanApplication.getLoanAppliedAmount(),
				loanApplication.getLoanApprovedAmount(), loanApplication.isLandVerificationApproval(),
				loanApplication.isFinanceVerificationApproval(), loanApplication.isAdminApproval(),
				loanApplication.getStatus(),loanApplication.getCust_id());
//		CustomerDetails customerDetails = loanApplication.getCustomer();
//		System.out.println("requested Customer Data" + customerDetails);
//		Customer cust = new Customer(customerDetails);
//		UserDetails ud = customerDetails.getUser();
//		User user = new User(ud);
//		user.setCustomer(cust);
//		cust.setUser(user);
//		cust.setLoanApplication(loanApp);
//		loanApp.setCustomer(cust);
//		System.out.println(loanApp);
		LoanApplication newLoanApp = service.updateStatus(loanApp);
		LoanApplicationDetails details = lUtil.toDetails(newLoanApp);
		System.out.println("updated Data " + newLoanApp);
		return details;
	}

	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping("/add")
	public LandVerificationOfficerDetails addofficer(@RequestBody CreateLandVerificationRequest reqData) {

		LandVerificationOfficer lo = new LandVerificationOfficer(reqData.getOfficerName(), reqData.getOfficerContact(),
				reqData.getUsers());
		LandVerificationOfficer lOfficer = service.addOfficer(lo);
		return landUtil.toDetails(lOfficer);

	}
	@ResponseStatus(code = HttpStatus.OK)
	@GetMapping("/findall")
	public List<LoanApplication> findAll()
	{
		
		return lservice.retrieveAllLoanApplication();
	}
	@ResponseStatus(code=HttpStatus.OK)
	@GetMapping("/find/{id}")
	public LoanApplication retrieveLoanApplicationById(@PathVariable("id") Long id) {
		LoanApplication loanApp = lservice.retrieveLoanApplicationById(id);
		return loanApp;
	}
}
