import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplication } from 'src/app/model/LoanAppication';
import { StatusEnum } from 'src/app/model/Status';
import { LandService } from 'src/app/service/LandService';

@Component({
  selector: 'app-show-land',
  templateUrl: './show-land.component.html',
  styleUrls: ['./show-land.component.css']
})
export class ShowLandComponent implements OnInit {

  landService:LandService;
  router:Router;
  loanapplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
  constructor(landService:LandService,router:Router) { 
    this.landService=landService;
    this.router=router;
  }
  applications:LoanApplication[]=[];
  ngOnInit(): void {
    this.landService.fetchLoanApplications();
    this.applications=this.landService.getLoanApplications();
    console.log(this.applications);
  }
  updateLoanApplication(id:any){
    this.router.navigate(['/update-land/'+id]);
  }

}
