package com.cg.homeloan.service;

import java.util.List;

import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.repository.ILoanApplicationRepository;

public interface ILoanApplicationService  {
	
	public LoanApplication addLoanApplication(LoanApplication loanApplication);
	
	public LoanApplication updateLoanApplication(LoanApplication loanApplication);
	public LoanApplication deleteLoanApplication(long loanApplicationId);
	public List<LoanApplication> retrieveAllLoanApplication();
	public LoanApplication retrieveLoanApplicationById(long loanApplicationId);
	
	

}
