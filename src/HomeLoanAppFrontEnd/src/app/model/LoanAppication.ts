import {StatusEnum} from '../model/Status';

export class LoanApplication{
    
    applicationId:any;
    applicationDate:Date;
    loanAppliedAmount:any;
    loanApprovedAmount:any;
    landVerificationApproval:boolean;
    financeVerificationApproval:boolean;
    adminApproval:boolean;
    status:StatusEnum;
    cust_id:String;
    constructor(applicationId:any,
        applicationDate:Date,
        loanAppliedAmount:any,
        loanApprovedAmount:any,
        landVerificationApproval:boolean,
        financeVerificationApproval:boolean,
        adminApproval:boolean,
        status:StatusEnum,
        cust_id:String)
    {
        this.applicationId=applicationId;
        this.applicationDate=applicationDate;
        this.loanAppliedAmount=loanAppliedAmount;
        this.loanApprovedAmount=loanApprovedAmount;
        this.landVerificationApproval=landVerificationApproval;
        this.financeVerificationApproval=financeVerificationApproval;
        this.adminApproval=adminApproval;
        this.status=status;
        this.cust_id=cust_id;

    }


    
}