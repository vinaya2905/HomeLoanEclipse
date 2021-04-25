package com.cg.homeloan.controller;

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

import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.service.ILoanApplicationService;

@RestController
@RequestMapping("/loanapplication")
public class LoanApplicationController {
	@Autowired
	private ILoanApplicationService service;
	
	@ResponseStatus(code = HttpStatus.CREATED)
	@PostMapping("/add")
	public LoanApplication addLoanApplication(@RequestBody LoanApplication loanApplication)
	{
		LoanApplication lapp=service.addLoanApplication(loanApplication);
		return lapp;
		
	}
	@GetMapping("/find/{id}")
	public LoanApplication retrieveLoanApplicationById(@PathVariable("id")Long id)
	{
		LoanApplication loanApp=service.retrieveLoanApplicationById(id);
		return loanApp;
	}
	@PutMapping("/update")
	public LoanApplication updateLoanApplication(@RequestBody LoanApplication loanApplication)
	{
		return service.updateLoanApplication(loanApplication);
	}
	
	

}
