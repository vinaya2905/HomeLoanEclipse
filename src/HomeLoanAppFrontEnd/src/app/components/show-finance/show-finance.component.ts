import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplication } from 'src/app/model/LoanAppication';
import { StatusEnum } from 'src/app/model/Status';
import { FinanceService } from 'src/app/service/FinanceService';

@Component({
  selector: 'app-show-finance',
  templateUrl: './show-finance.component.html',
  styleUrls: ['./show-finance.component.css']
})
export class ShowFinanceComponent implements OnInit {

  financeService:FinanceService;
  router:Router;
  loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
  constructor(financeService:FinanceService,router:Router) { 
    this.financeService=financeService;
    this.router=router;
  }
  applications:LoanApplication[]=[];
  ngOnInit(): void {
    this.financeService.fetchLoanApplications();
    this.applications=this.financeService.getLoanApplications();
    console.log(this.applications);
  }
  updateLoanApplication(id:any){
    this.router.navigate(['/update-finance/'+id]);
  }


}
