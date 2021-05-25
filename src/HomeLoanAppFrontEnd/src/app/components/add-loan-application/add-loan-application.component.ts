import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplication } from 'src/app/model/LoanAppication';
import { StatusEnum } from 'src/app/model/Status';
import { LoanApplicationService } from 'src/app/service/LoanApplicationService';

@Component({
  selector: 'app-add-loan-application',
  templateUrl: './add-loan-application.component.html',
  styleUrls: ['./add-loan-application.component.css']
})
export class AddLoanApplicationComponent implements OnInit {
  alert:boolean=false;
  createdLoanApp:LoanApplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
  createdFlag:boolean=false;
  service:LoanApplicationService;
  router:Router;
  constructor(service:LoanApplicationService,router:Router) {
    this.service=service;
    this.router=router;
   }

  ngOnInit(): void {
  }
  add(data:any)
  {
    
    this.createdLoanApp=new LoanApplication(data.applicationId,data.applicationDate,data.loanAppliedAmount,data.loanApprovedAmount
      ,data.landVerificationApproval,data.financeVerificationApproval,data.adminApproval,data.status,data.cust_id);
      this.service.addLoanApplication(this.createdLoanApp);
      console.log(this.createdLoanApp);
      this.createdFlag=true;
      this.alert=true;
  }
    closeAlert()
  {
    this.alert=false;
  }

}
// alert:boolean=false;
//   user:User=new User("","");
//   createdCustomer:Customer=new Customer("","","","",new Date(),"","","","",this.user);
//   createdFlag:boolean=false;
//   service:CustomerserviceService;
//   router:Router;
//   constructor(service:CustomerserviceService,router:Router) {
//     this.service=service;
//     this.router=router;
//    }

//   ngOnInit(): void {
//   }
//   add(data:any){
//     console.log(data.user);
//     this.user.password=data.password;
//     this.user.role=data.role;
//     this.createdCustomer=new Customer(data.cust_id,data.customerName,data.mobileNumber,data.emailId,data.dateOfBirth,data.gender,data.nationality,data.aadharNumber,data.panNumber,this.user);
//     this.service.addCustomer(this.createdCustomer);
//     console.log(this.createdCustomer);
//     this.createdFlag=true;
//     // this.router.navigate(['/show-all']);
//     this.alert=true;
    
//   }
//   closeAlert()
//   {
//     this.alert=false;
//   }