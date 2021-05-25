import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanApplication } from '../model/LoanAppication';
import { StatusEnum } from '../model/Status';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class LoanApplicationService{
    http: HttpClient;
    applications:LoanApplication[]=[];
    loanApplication:LoanApplication=new LoanApplication("",new Date(),"","",false,false,false,StatusEnum.PENDING,"");
    constructor(http:HttpClient){
        this.http=http;
    }
    sendPost(app:LoanApplication){
        const headers = { 'content-type': 'application/json'};
        const body=JSON.stringify(app);  
        console.log('---------');
        console.log(body);
        this.http.post('http://localhost:8086/loanapplication/add',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
         app.applicationId=dataVal[0];
       }
     );
     }
     addLoanApplication(loan:LoanApplication){
         this.applications.push(loan);
         this.sendPost(loan);
     }
     getLoanApplications():LoanApplication[]{
       return this.applications;
     }
     fetchLoanApplications(){
       this.applications=[];
       this.http.get<LoanApplication[]>("http://localhost:8086/loanapplication/findall").subscribe(
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
    
      return this.http.get(`http://localhost:8086/loanapplication/find/`+id);
    }
    updateLoanApplication(id:any,value:any):Observable<any>{
      return this.http.put(`http://localhost:8086/loanapplication/update/`+id,value);
    }
    getLoanApplication(id:any):Observable<any>{
      
      console.log('---------');
    
        console.log('id: '+id);
        return this.http.get('http://localhost:8086/loanapplication/find/'+id);
      }
  }
  