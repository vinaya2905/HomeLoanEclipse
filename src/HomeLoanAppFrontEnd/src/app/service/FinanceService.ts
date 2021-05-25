import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanApplication } from '../model/LoanAppication';
import { StatusEnum } from '../model/Status';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class FinanceService{
    http: HttpClient;
    applications:LoanApplication[]=[];
    loanApplication:LoanApplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
    constructor(http:HttpClient){
        this.http=http;
    }
    
     getLoanApplications():LoanApplication[]{
       return this.applications;
     }
     fetchLoanApplications(){
       this.applications=[];
       this.http.get<LoanApplication[]>("http://localhost:8086/financeverification/findall").subscribe(
         data=>{
           this.convert(data);
         }
       );
     }
     convert(data:LoanApplication[]){
       for(let d of data){
         let loanapp=new LoanApplication(d.applicationId,d.applicationDate,d.loanAppliedAmount,d.loanApprovedAmount,d.landVerificationApproval
          ,d.financeVerificationApproval,d.adminApproval,d.status,d.cust_id);
          this.applications.push(loanapp);
       }
     }
     read(id:any): Observable<any> {
    
      return this.http.get(`http://localhost:8086/financeverification/find/`+id);
    }
    updateLoanApplication(id:any,value:any):Observable<any>{
      return this.http.put(`http://localhost:8086/financeverification/update/`+id,value);
    }
  }
  