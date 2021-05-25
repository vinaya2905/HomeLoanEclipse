import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplication } from 'src/app/model/LoanAppication';
import { StatusEnum } from 'src/app/model/Status';
import { LoanApplicationService } from 'src/app/service/LoanApplicationService';

@Component({
  selector: 'app-show-loanapplication',
  templateUrl: './show-loanapplication.component.html',
  styleUrls: ['./show-loanapplication.component.css']
})
export class ShowLoanapplicationComponent implements OnInit {

  loanappService:LoanApplicationService;
  router:Router;
  loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
  constructor(loanappService:LoanApplicationService,router:Router) { 
    this.loanappService=loanappService;
    this.router=router;
  }
  applications:LoanApplication[]=[];
  ngOnInit(): void {
    this.loanappService.fetchLoanApplications();
    this.applications=this.loanappService.getLoanApplications();
    console.log(this.applications);
  }
  updateLoanApplication(id:any){
    this.router.navigate(['/update-loanapplication/'+id]);
  }

}
