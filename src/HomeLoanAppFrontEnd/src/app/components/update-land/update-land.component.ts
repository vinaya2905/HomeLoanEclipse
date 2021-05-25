import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanApplication } from 'src/app/model/LoanAppication';
import { StatusEnum } from 'src/app/model/Status';
import { LandService } from 'src/app/service/LandService';

@Component({
  selector: 'app-update-land',
  templateUrl: './update-land.component.html',
  styleUrls: ['./update-land.component.css']
})
export class UpdateLandComponent implements OnInit {

  Id:any;
  loanapplication:LoanApplication;
  alert:boolean=false;

  constructor(private route:ActivatedRoute,private landService:LandService) {
    this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
   }

  ngOnInit(): void {
    this.loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
    this.Id = this.route.snapshot.params['id'];
    this.landService.read(this.Id).subscribe
    (
      data=>{
        console.log(data);
        this.loanapplication=data;
      },error=>console.log(error)
    );
    this.getLoanApplication(this.route.snapshot.paramMap.get('id'));
    
  }
  getLoanApplication(id:any):void{
    this.landService.read(id).subscribe(
      response=>{
        this.loanapplication=response;
      },
      error=>{
        console.log(error);
      });
  }
  updateLoanApplication(){
    this.landService.updateLoanApplication(this.Id,this.loanapplication).subscribe
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
