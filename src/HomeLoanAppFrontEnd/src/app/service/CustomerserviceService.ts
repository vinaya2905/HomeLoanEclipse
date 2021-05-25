import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../model/customer';
import {User} from '../model/user';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8086/customer';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerserviceService{
      http: HttpClient;
      customers:Customer[]=[];
      user:User=new User(0,"","");
      customer:Customer=new Customer("","","","",new Date(),"","","","",this.user);
      constructor(http:HttpClient) {
        this.http = http;
       }
       sendPost(cust:Customer){
        const headers = { 'content-type': 'application/json'};
        const body=JSON.stringify(cust);  
        console.log('---------');
        console.log(body);
        this.http.post('http://localhost:8086/customer/add',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
         cust.cust_id=dataVal[0];
       }
     );
     }
     sendPut(cust:Customer){
      const headers = { 'content-type': 'application/json'};
      const body=JSON.stringify(cust);  
      console.log('---------');
      console.log(body);
      this.http.put('http://localhost:8086/customer/update/id',body,{'headers':headers}).subscribe(
     data=>{
       let dataVal = Object.values(data);
       cust.cust_id=dataVal[0];
     }
   );
   }
  read(id:any): Observable<any> {
    
    return this.http.get(`http://localhost:8086/customer/view/`+id);
  }
       addCustomer(cus:Customer){
           this.customers.push(cus);
           this.sendPost(cus);
       }

    


       update(cust:Customer):boolean{
        
        let customerToUpdate=this.customers.find(b=>b.cust_id==cust.cust_id);
        if(customerToUpdate){
          customerToUpdate.mobileNumber=cust.mobileNumber;
          customerToUpdate.emailId=cust.emailId;
          this.customers.push(cust);
          this.sendPut(cust);
          return true;
        }
        return false;
       }
      
      getCustomers():Customer[]{
        return this.customers;
      }
      fetchCustomers(){
        this.customers=[];
        this.http.get<Customer[]>("http://localhost:8086/customer/findall").subscribe(
          data=>{
           // console.log('data: '+data); 
            this.convert(data);}
        );
      }
      convert(data:Customer[]){
        for(let c of data){
          let cust=new Customer(c.cust_id,c.customerName,c.mobileNumber,c.emailId,c.dateOfBirth,c.gender,c.nationality,c.aadharNumber,c.panNumber,c.user);
          console.log('all----');
          this.customers.push(cust);
        }
      }
      // getCustomer(id:any):Observable<any>{
      //   return this.http.get
      // }
      updateCustomer(id:String,value:any):Observable<any>{
        return this.http.put(`http://localhost:8086/customer/update/`+id,value);
      }
      getCustomer(cust:string):Observable<any>{
      //   const headers = { 'content-type': 'application/json'};
      // const body=JSON.stringify(cust);  
      console.log('---------');
      //console.log(body);
        console.log('id: '+cust);
        return this.http.get('http://localhost:8086/customer/view/'+cust);
      }
  }
