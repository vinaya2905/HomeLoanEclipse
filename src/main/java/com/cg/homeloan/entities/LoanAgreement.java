package com.cg.homeloan.entities;

/**
 * 
 * @author VINAYA SREE
 *
 */

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "loanAgreement")
public class LoanAgreement {

	@Id
	@SequenceGenerator(allocationSize = 1,name="seq3",sequenceName = "loanagreement_seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "seq3")
	private long loanAgreementId;
	private long loanapplicationId;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "emi_id", referencedColumnName = "EMIId")
	private EMI emi;

	public LoanAgreement() {

	}

	public LoanAgreement(long loanAgreementId, long loanApplicationId, EMI emi) {
		this.loanAgreementId = loanAgreementId;
		this.loanapplicationId = loanApplicationId;
		this.emi = emi;
	}

	public LoanAgreement(long loanAgreementId, long loanApplicationId) {
		this.loanAgreementId = loanAgreementId;
		this.loanapplicationId = loanApplicationId;

	}

	public long getLoanAgreementId() {
		return loanAgreementId;
	}

	public void setLoanAgreementId(long loanAgreementId) {
		this.loanAgreementId = loanAgreementId;
	}

	public long getLoanapplicationId() {
		return loanapplicationId;
	}

	public void setLoanapplicationId(long loanapplicationId) {
		this.loanapplicationId = loanapplicationId;
	}

	public EMI getEmi() {
		return emi;
	}

	public void setEmi(EMI emi) {
		this.emi = emi;
	}

	@Override
	public String toString() {
		return "LoanAgreement [loanAgreementId=" + loanAgreementId + ", loanApplicationId=" + loanapplicationId
				+ ", emi=" + emi + "]";
	}
}
