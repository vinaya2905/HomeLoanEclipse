package com.cg.homeloan.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.entities.Status;
import com.cg.homeloan.exception.LoanApplicationNotFoundException;
import com.cg.homeloan.repository.ILoanApplicationRepository;

@Service
@Transactional
public class LoanApplicationImpl implements ILoanApplicationService {

	@Autowired
	private ILoanApplicationRepository aDao;
	
	@Override
	public LoanApplication addLoanApplication(LoanApplication loanApplication) {
		LoanApplication la=aDao.save(loanApplication);
		return la;
	}

	@Override
	public LoanApplication updateLoanApplication(LoanApplication loanApplication) {
		Optional<LoanApplication> loanData=this.aDao.findById(loanApplication.getApplicationId());
		if(loanData.isPresent()) {
			LoanApplication loan=loanData.get();
			//if(loan.getStatus().equals(Status.))
//			loan.setLandVerificationApproval(loanApplication.isLandVerificationApproval());
//			loan.setFinanceVerificationApproval(loanApplication.isFinanceVerificationApproval());
			if(loan.isFinanceVerificationApproval() && loan .isLandVerificationApproval())
				loan.setAdminApproval(true);
			else if(loan.getStatus().equals(Status.WAITING_FOR_FINANCE_APPROVAL))
				loan.setStatus(Status.PENDING);
			else 
				loan.setAdminApproval(false);
			LoanApplication upadatedApplication=aDao.save(loan);
			return upadatedApplication;
		}
		else
			throw new LoanApplicationNotFoundException("Invalid Application for Id"+loanApplication.getApplicationId());
	}

	@Override
	public LoanApplication deleteLoanApplication(long loanApplicationId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<LoanApplication> retrieveAllLoanApplication() {
		return aDao.findAll();
	}

	@Override
	public LoanApplication retrieveLoanApplicationById(long loanApplicationId) {

		Optional<LoanApplication> opt=aDao.findById(loanApplicationId);
		if(opt.isPresent())
			return opt.get();
		throw new LoanApplicationNotFoundException("LoanApplication not found for id"+loanApplicationId);
	}

}
