package com.cg.homeloan.service;

import com.cg.homeloan.entities.LandVerificationOfficer;
import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.repository.ILandVerificationRepository;

public interface ILandVerificationService {
		public LoanApplication updateStatus(LoanApplication loanApplication);
		public LandVerificationOfficer addOfficer(LandVerificationOfficer landOfficer);
		}


