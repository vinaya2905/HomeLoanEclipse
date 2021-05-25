import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanApplication } from 'src/app/model/LoanAppication';
import { StatusEnum } from 'src/app/model/Status';
import { LoanApplicationService } from 'src/app/service/LoanApplicationService';

@Component({
  selector: 'app-update-loanapplication',
  templateUrl: './update-loanapplication.component.html',
  styleUrls: ['./update-loanapplication.component.css']
})
export class UpdateLoanapplicationComponent implements OnInit {

  Id:any;
  loanapplication:LoanApplication;
  alert:boolean=false;

  constructor(private route:ActivatedRoute,private loanService:LoanApplicationService) {
    this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
   }

  ngOnInit(): void {
    this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
    this.Id = this.route.snapshot.params['id'];
    this.loanService.read(this.Id).subscribe
    (
      data=>{
        console.log(data);
        this.loanapplication=data;
      },error=>console.log(error)
    );
    this.getLoanApplication(this.route.snapshot.paramMap.get('id'));
    
  }
  getLoanApplication(id:any):void{
    this.loanService.read(id).subscribe(
      response=>{
        this.loanapplication=response;
      },
      error=>{
        console.log(error);
      });
  }
  updateLoanApplication(){
    this.loanService.updateLoanApplication(this.Id,this.loanapplication).subscribe
    (
      data=>{
        console.log(data);
        this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
      },error=>console.log(error)
    );
    this.alert=true;
  }
  onSubmit(){
    this.updateLoanApplication();
  }
  closeAlert()
  {
    this.alert=false;
  }

}

