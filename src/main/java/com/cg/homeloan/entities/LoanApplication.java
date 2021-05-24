package com.cg.homeloan.entities;

/**
 * 
 * @author VINAYA SREE
 *
 */

import java.time.LocalDate;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "loanapplication")
public class LoanApplication {

	@Id
	@SequenceGenerator(allocationSize = 1, name = "seq2", sequenceName = "loanapplication_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq2")
	private long applicationId;
	private LocalDate applicationDate;
	private double loanAppliedAmount;
	private double loanApprovedAmount;
	private boolean landVerificationApproval;
	private boolean financeVerificationApproval;
	private boolean adminApproval;

	private Status status;
	private String cust_id;
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "cust_id")
//	private Customer customer;

	public LoanApplication() {

	}

	public LoanApplication(LocalDate applicationDate, double loanAppliedAmount, double loanApprovedAmount,
			boolean landVerificationApproval, boolean financeVerificationApproval, boolean adminApproval, Status status,
			String cust_id) {
		super();

		this.applicationDate = applicationDate;
		this.loanAppliedAmount = loanAppliedAmount;
		this.loanApprovedAmount = loanApprovedAmount;
		this.landVerificationApproval = landVerificationApproval;
		this.financeVerificationApproval = financeVerificationApproval;
		this.adminApproval = adminApproval;
		this.status = status;
		this.cust_id=cust_id;
		//this.customer = customer;
	}

	public LoanApplication(long applicationId, LocalDate applicationDate, double loanAppliedAmount,
			double loanApprovedAmount, boolean landVerificationApproval, boolean financeVerificationApproval,
			boolean adminApproval, Status status, String cust_id) {
		super();
		this.applicationId = applicationId;
		this.applicationDate = applicationDate;
		this.loanAppliedAmount = loanAppliedAmount;
		this.loanApprovedAmount = loanApprovedAmount;
		this.landVerificationApproval = landVerificationApproval;
		this.financeVerificationApproval = financeVerificationApproval;
		this.adminApproval = adminApproval;
		this.status = status;
		this.cust_id=cust_id;
		//this.customer = customer;
	}

	public LoanApplication(long applicationId, LocalDate applicationDate, double loanAppliedAmount,
			double loanApprovedAmount, boolean landVerificationApproval, boolean financeVerificationApproval,
			boolean adminApproval, Status status) {
		super();
		this.applicationId = applicationId;
		this.applicationDate = applicationDate;
		this.loanAppliedAmount = loanAppliedAmount;
		this.loanApprovedAmount = loanApprovedAmount;
		this.landVerificationApproval = landVerificationApproval;
		this.financeVerificationApproval = financeVerificationApproval;
		this.adminApproval = adminApproval;
		this.status = status;
	}

	public long getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(long applicationId) {
		this.applicationId = applicationId;
	}

	public LocalDate getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(LocalDate applicationDate) {
		this.applicationDate = applicationDate;
	}

//	public Customer getCustomer() {
//		return customer;
//	}
//
//	public void setCustomer(Customer customer) {
//		this.customer = customer;
//	}

	public double getLoanAppliedAmount() {
		return loanAppliedAmount;
	}

	public void setLoanAppliedAmount(double loanAppliedAmount) {
		this.loanAppliedAmount = loanAppliedAmount;
	}

	public double getLoanApprovedAmount() {
		return loanApprovedAmount;
	}

	public void setLoanApprovedAmount(double loanApprovedAmount) {
		this.loanApprovedAmount = loanApprovedAmount;
	}

	public boolean isLandVerificationApproval() {
		return landVerificationApproval;
	}

	public void setLandVerificationApproval(boolean landVerificationApproval) {
		this.landVerificationApproval = landVerificationApproval;
	}

	public boolean isFinanceVerificationApproval() {
		return financeVerificationApproval;
	}

	public void setFinanceVerificationApproval(boolean financeVerificationApproval) {
		this.financeVerificationApproval = financeVerificationApproval;
	}

	public boolean isAdminApproval() {
		return adminApproval;
	}

	public void setAdminApproval(boolean adminApproval) {
		this.adminApproval = adminApproval;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public String getCust_id() {
		return cust_id;
	}

	public void setCust_id(String cust_id) {
		this.cust_id = cust_id;
	}

	@Override
	public String toString() {
		return "LoanApplication [applicationId=" + applicationId + ", applicationDate=" + applicationDate
				+ ", loanAppliedAmount=" + loanAppliedAmount + ", loanApprovedAmount=" + loanApprovedAmount
				+ ", landVerificationApproval=" + landVerificationApproval + ", financeVerificationApproval="
				+ financeVerificationApproval + ", adminApproval=" + adminApproval + ", status=" + status;
	}

}
