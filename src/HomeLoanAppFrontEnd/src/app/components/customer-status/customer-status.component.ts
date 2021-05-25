import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMI } from 'src/app/model/EMI';
import { LoanAgreement } from 'src/app/model/LoanAgreement';
import { LoanAgreementService } from 'src/app/service/LoanAgreementService';
import { Customer } from '../../model/customer';
import { LoanApplication } from '../../model/LoanAppication';
import { StatusEnum } from '../../model/Status';
import { User } from '../../model/user';
import { CustomerserviceService } from '../../service/CustomerserviceService';
import { LoanApplicationService } from '../../service/LoanApplicationService';

@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.css']
})
export class CustomerStatusComponent implements OnInit {
  search_value:string="";
  application_id="";
  agreementId="";
  service:CustomerserviceService;
  lserivce:LoanApplicationService;
  aService:LoanAgreementService
  foundUser:User=new User(0,"","");
  foundCust:Customer=new Customer("","","","",new Date(),"","","","",this.foundUser);
  foundLoan:LoanApplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
  foundAgmt:LoanAgreement=new LoanAgreement("","",new EMI(0,new Date(),"","",""));
  foundFlag: boolean = false;
  router:Router;
  
  constructor(service:CustomerserviceService,router:Router,lserivce:LoanApplicationService,aService:LoanAgreementService) { 
    this.service=service;
    this.router=router;
    this.lserivce=lserivce;
    this.aService=aService;
  }

  ngOnInit(): void {
  }
  custDetails(data:any){
    this.foundFlag = false; 
    this.foundCust.cust_id=data;
   // console.log(this.foundCust);
   console.log(this.search_value);
    this.service.getCustomer(this.search_value).subscribe(
      data=>{
        console.log(data);
        let dataVal:any=Object.values(data);
        this.foundCust=data;
      },
      error=>
      {
        console.log('error');
      }
    );
    this.foundFlag = true;  
    // this.router.navigate(['/show-customer/']+data);
  }
  updateCustomer(id:any){
    this.router.navigate(['/update-customer/'+id]);
  }
  loanTrack(data:any){
    this.foundLoan.applicationId=data;
    this.lserivce.getLoanApplication(this.application_id).subscribe(
      data=>{
        console.log(data);
        this.foundLoan=data;
      },
      error=>
      {
        console.log('error');
      }
    );
  }
  agmtDetails(id:any){
    this.foundAgmt.loanAgreementId=id;
    this.aService.getLoanAgreement(this.agreementId).subscribe(
      data=>{
        console.log(data);
        this.foundAgmt=data;
      },
      error=>
      {
        console.log('error');
      }
    );
  }
  updateLoanAgreement(id:any)
  {
    this.router.navigate(['update-loanagreement/']+id);
  }

}
