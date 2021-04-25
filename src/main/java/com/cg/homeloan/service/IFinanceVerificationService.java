package com.cg.homeloan.service;

import com.cg.homeloan.entities.FinanceVerificationOfficer;
import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.repository.IFinanceVerificationRepository;

public interface IFinanceVerificationService {
	public LoanApplication updateStatus(LoanApplication loanApplication);
	public FinanceVerificationOfficer addOfficer(FinanceVerificationOfficer financeOfficer);
	
}
