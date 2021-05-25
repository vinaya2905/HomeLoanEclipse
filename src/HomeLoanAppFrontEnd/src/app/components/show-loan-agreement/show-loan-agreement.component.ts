import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMI } from 'src/app/model/EMI';
import { LoanAgreement } from 'src/app/model/LoanAgreement';
import { LoanAgreementService } from 'src/app/service/LoanAgreementService';

@Component({
  selector: 'app-show-loan-agreement',
  templateUrl: './show-loan-agreement.component.html',
  styleUrls: ['./show-loan-agreement.component.css']
})
export class ShowLoanAgreementComponent implements OnInit {
  service:LoanAgreementService;
  router:Router;
  loanagmtLoanAgreement=new LoanAgreement("","",new EMI(0,new Date(),"","",""));
  constructor(service:LoanAgreementService,
    router:Router) { 
      this.service=service;
      this.router=router;
    }
    agreement:LoanAgreement[]=[];

  ngOnInit(): void {
    this.service.fetchLoanAgreements();
    this.agreement=this.service.getLoanAgreements();
    console.log(this.agreement);
  }
    updateLoanAgreement(id:any){
    this.router.navigate(['/update-loanagreement/'+id]);
  }

}
// loanappService:LoanApplicationService;
//   router:Router;
//   loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
//   constructor(loanappService:LoanApplicationService,router:Router) { 
//     this.loanappService=loanappService;
//     this.router=router;
//   }
//   applications:LoanApplication[]=[];
//   ngOnInit(): void {
//     this.loanappService.fetchLoanApplications();
//     this.applications=this.loanappService.getLoanApplications();
//     console.log(this.applications);
//   }
//   updateLoanApplication(id:any){
//     this.router.navigate(['/update-loanapplication/'+id]);
//   }
