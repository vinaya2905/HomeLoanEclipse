package com.cg.homeloan.service;

/**
 * 
 * @author VINAYA SREE
 *
 */

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.homeloan.entities.Customer;
import com.cg.homeloan.entities.LandVerificationOfficer;
import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.entities.Status;
import com.cg.homeloan.exception.LandVerificationException;
import com.cg.homeloan.repository.ICustomerRepository;
import com.cg.homeloan.repository.ILandVerificationRepository;
import com.cg.homeloan.repository.ILoanApplicationRepository;

@Service
@Transactional
public class LandVerificationImpl implements ILandVerificationService {

	@Autowired
	private ILandVerificationRepository landDao;
	@Autowired
	private ILoanApplicationRepository loanDao;
	@Autowired
	private ICustomerRepository cDao;

	@Override
	public LoanApplication updateStatus(LoanApplication loanApplication) {
//		Optional<LoanApplication> loanData = this.loanDao.findById(loanApplication.getApplicationId());
//		if (loanData.isPresent()) {
//			LoanApplication lapp = loanData.get();
//			if (lapp.getStatus().equals(Status.PENDING)) {
//
//				if (lapp.getCustomer().getAadharNumber().isEmpty() && lapp.getCustomer().getPanNumber().isEmpty()) {
//					lapp.setStatus(Status.DOCUMENTS_NOT_UPLOADED);
//				} else if (!lapp.getCustomer().getAadharNumber().isEmpty()
//						&& !lapp.getCustomer().getPanNumber().isEmpty()) {
//					lapp.setStatus(Status.DOCUMENTS_UPLOADED);
//				}
//
//			} else if (lapp.getStatus().equals(Status.DOCUMENTS_UPLOADED)) {
//				if (lapp.getCustomer().getAadharNumber().length() == 12
//						&& lapp.getCustomer().getPanNumber().length() == 10) {
//					lapp.setStatus(Status.APPROVED);
//					lapp.setLandVerificationApproval(true);
//				} else {
//					lapp.setStatus(Status.REJECTED);
//					lapp.setLandVerificationApproval(false);
//				}
//			}
//			// LoanApplication updatedLoanApp=loanDao.save(lapp);
//			return loanDao.save(lapp);
//		}
//
//		else {
//			throw new LandVerificationException(
//					"Could not update status of landverification officer for id " + loanApplication.getApplicationId());
//		}
		Optional<LoanApplication> loanOpt=loanDao.findById(loanApplication.getApplicationId());
		if(loanOpt.isPresent()) {
			LoanApplication loanApp=loanOpt.get();
			System.out.println("printing "+loanApp);
			Optional<Customer> opt=cDao.findById(loanApplication.getCust_id());
			if((loanApp.getStatus().equals(Status.PENDING) && loanApp.isFinanceVerificationApproval()==false)||loanApp.getStatus().equals(Status.WAITING_FOR_LAND_VERIFICATION_OFFICE_APPROVAL)){
				System.out.println("entered pending  or land officer approval condition");
				if(opt.isPresent()) {
					Customer cust=opt.get();
					System.out.println(cust);
					if(cust.getAadharNumber().isEmpty() && cust.getPanNumber().isEmpty()) {
						loanApp.setStatus(Status.DOCUMENTS_NOT_UPLOADED);
					}
					else if(!cust.getAadharNumber().isEmpty() && !cust.getPanNumber().isEmpty()) {
						loanApp.setStatus(Status.DOCUMENTS_UPLOADED);
					}
						
				}
			}
			else if(loanApp.getStatus().equals(Status.DOCUMENTS_UPLOADED)) {
				if(opt.isPresent()) {
					Customer cust=opt.get();
					if(cust.getAadharNumber().length()==12 && cust.getPanNumber().length()==10) {
						//loanApp.setStatus(Status.APPROVED);
						loanApp.setStatus(Status.WAITING_FOR_FINANCE_APPROVAL);
						loanApp.setLandVerificationApproval(true);
					}
					else {
						loanApp.setStatus(Status.REJECTED);
						loanApp.setLandVerificationApproval(false);
					}
				}
			}
			return loanDao.save(loanApp);
		}
		else {
			throw new LandVerificationException("Could not update status of landverification officer for id " + loanApplication.getApplicationId());
		}
	}

	@Override
	public LandVerificationOfficer addOfficer(LandVerificationOfficer landOfficer) {

		LandVerificationOfficer lOfficer = landDao.save(landOfficer);
		return lOfficer;
	}

}
