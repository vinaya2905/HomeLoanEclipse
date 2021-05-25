import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMI } from 'src/app/model/EMI';
import { LoanAgreement } from 'src/app/model/LoanAgreement';
import { LoanAgreementService } from 'src/app/service/LoanAgreementService';

@Component({
  selector: 'app-update-loan-agreement',
  templateUrl: './update-loan-agreement.component.html',
  styleUrls: ['./update-loan-agreement.component.css']
})
export class UpdateLoanAgreementComponent implements OnInit {

  Id:any;
  loanagreement:LoanAgreement;
  alert:boolean=false;

  constructor(private route:ActivatedRoute,private loanService:LoanAgreementService) {
    this.loanagreement=new LoanAgreement("","",new EMI(0,new Date(),"","",""));
   }

  ngOnInit(): void {
    this.loanagreement=new LoanAgreement("","",new EMI(0,new Date(),"","",""));;
    this.Id = this.route.snapshot.params['id'];
    this.loanService.read(this.Id).subscribe
    (
      data=>{
        console.log(data);
        this.loanagreement=data;
      },error=>console.log(error)
    );
    this.getLoanAgreement(this.route.snapshot.paramMap.get('id'));
    
  }
  getLoanAgreement(id:any):void{
    this.loanService.read(id).subscribe(
      response=>{
        this.loanagreement=response;
      },
      error=>{
        console.log(error);
      });
  }
  updateLoanAgreement(){
    this.loanService.updateLoanAgreement(this.Id,this.loanagreement).subscribe
    (
      data=>{
        console.log(data);
        this.loanagreement=new LoanAgreement("","",new EMI(0,new Date(),"","",""));;
      },error=>console.log(error)
    );
    this.alert=true;
  }
  onSubmit(){
    this.updateLoanAgreement();
  }
  closeAlert()
  {
    this.alert=false;
  }

}

