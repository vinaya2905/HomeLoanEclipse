import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanApplication } from '../../model/LoanAppication';
import { StatusEnum } from '../../model/Status';
import { FinanceService } from '../../service/FinanceService';

@Component({
  selector: 'app-update-finance',
  templateUrl: './update-finance.component.html',
  styleUrls: ['./update-finance.component.css']
})
export class UpdateFinanceComponent implements OnInit {
  Id:any;
  loanapplication:LoanApplication;
  alert:boolean=false;

  constructor(private route:ActivatedRoute,private financeService:FinanceService) {
    this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
   }

  ngOnInit(): void {
    this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
    this.Id = this.route.snapshot.params['id'];
    this.financeService.read(this.Id).subscribe
    (
      data=>{
        console.log(data);
        this.loanapplication=data;
      },error=>console.log(error)
    );
    this.getLoanApplication(this.route.snapshot.paramMap.get('id'));
    
  }
  getLoanApplication(id:any):void{
    this.financeService.read(id).subscribe(
      response=>{
        this.loanapplication=response;
      },
      error=>{
        console.log(error);
      });
  }
  updateLoanApplication(){
    this.financeService.updateLoanApplication(this.Id,this.loanapplication).subscribe
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