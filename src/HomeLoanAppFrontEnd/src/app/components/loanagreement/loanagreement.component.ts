import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMI } from '../../model/EMI';
import { LoanAgreement } from '../../model/LoanAgreement';
import { LoanAgreementService } from '../../service/LoanAgreementService';

@Component({
  selector: 'app-loanagreement',
  templateUrl: './loanagreement.component.html',
  styleUrls: ['./loanagreement.component.css']
})
export class LoanagreementComponent implements OnInit {
  alert:boolean=false;
  createEmi:EMI=new EMI(0,new Date(),"","","");
  createLoanAgmt:LoanAgreement=new LoanAgreement("","",this.createEmi);
  createdFlag:boolean=false;
  service:LoanAgreementService;
  router:Router;
  constructor(service:LoanAgreementService,router:Router) {
    this.service=service;
    this.router=router;
   }
  ngOnInit(): void {
  }
  add(data:any){
    console.log(data.user);
    // this..password=data.password;
    // this.user.role=data.role;
    this.createEmi.dueDate=data.dueDate;
    this.createEmi.emiAmount=data.emiAmount;
    this.createEmi.loanAmount=data.loanAgmt;
    this.createEmi.interestAmount=data.interestAmount;
    this.createLoanAgmt=new LoanAgreement(data.loanAgreementId,data.loanapplicationId,this.createEmi);
    this.service.addLoanAgreement(this.createLoanAgmt);
    console.log(this.createLoanAgmt);
    this.createdFlag=true;
    // this.router.navigate(['/show-all']);
    this.alert=true;
    
  }
  closeAlert()
  {
    this.alert=false;
  }

}
