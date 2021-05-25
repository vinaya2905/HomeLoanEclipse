import { EMI } from "./EMI";

 export class LoanAgreement{
    loanAgreementId:any;
	loanapplicationId:any;
	emi:EMI;
    constructor(loanAgreementId:any,
        loanapplicationId:any,
        emi:EMI)
        {
            this.loanAgreementId=loanAgreementId;
            this.loanapplicationId=loanapplicationId;
            this.emi=emi;

        }
 }
 