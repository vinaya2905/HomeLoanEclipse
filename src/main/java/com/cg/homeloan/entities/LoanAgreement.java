package com.cg.homeloan.entities;

public class LoanAgreement {
	private long loanAgreementId;
	private long loanApplicationId;
	private EMI emi;
	
	public LoanAgreement() {
		
	}
	public LoanAgreement(long loanAgreementId, long loanApplicationId, EMI emi) {
		this.loanAgreementId = loanAgreementId;
		this.loanApplicationId = loanApplicationId;
		this.emi = emi;
	}


	public long getLoanAgreementId() {
		return loanAgreementId;
	}
	public void setLoanAgreementId(long loanAgreementId) {
		this.loanAgreementId = loanAgreementId;
	}
	public long getLoanApplicationId() {
		return loanApplicationId;
	}
	public void setLoanApplicationId(long loanApplicationId) {
		this.loanApplicationId = loanApplicationId;
	}
	public EMI getEmi() {
		return emi;
	}
	public void setEmi(EMI emi) {
		this.emi = emi;
	}
	@Override
	public String toString() {
		return "LoanAgreement [loanAgreementId=" + loanAgreementId + ", loanApplicationId=" + loanApplicationId
				+ ", emi=" + emi + "]";
	}
	
	
	

}
