import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanAgreement } from '../model/LoanAgreement';
import { EMI } from '../model/EMI';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class LoanAgreementService
{
    http: HttpClient;
    
    agreement:LoanAgreement[]=[];
    emi:EMI=new EMI(0,new Date(),"","","");
    loanAgreement:LoanAgreement=new LoanAgreement("","",this.emi);
    constructor(http:HttpClient){
        this.http=http;
    }
    sendPost(loanAgmt:LoanAgreement){
        const headers = { 'content-type': 'application/json'};
        const body=JSON.stringify(loanAgmt);  
        console.log('---------');
        console.log(body);
        this.http.post('http://localhost:8086/loanagreement/add',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
         loanAgmt.loanAgreementId=dataVal[0];
       }
     );
     }
     addLoanAgreement(loan:LoanAgreement){
        this.agreement.push(loan);
        this.sendPost(loan);
    }
    getLoanAgreements():LoanAgreement[]{
      return this.agreement;
    }
    fetchLoanAgreements(){
      this.agreement=[];
      this.http.get<LoanAgreement[]>("http://localhost:8086/loanagreement/findall").subscribe(
        data=>{
          this.convert(data);
        }
      );
    }
    convert(data:LoanAgreement[]){
      for(let d of data){
        let loanapp=new LoanAgreement(d.loanAgreementId,d.loanapplicationId,d.emi);
         this.agreement.push(loanapp);
      }
    }
    read(id:any): Observable<any> {
    
      return this.http.get(`http://localhost:8086/loanagreement/view/`+id);
    }
    updateLoanAgreement(id:any,value:any):Observable<any>{
      return this.http.put(`http://localhost:8086/loanagreement/update/`+id,value);
    }
    getLoanAgreement(id:any):Observable<any>{
      
      console.log('---------');
    
        console.log('id: '+id);
        return this.http.get('http://localhost:8086/loanagreement/view/'+id);
      }
}
