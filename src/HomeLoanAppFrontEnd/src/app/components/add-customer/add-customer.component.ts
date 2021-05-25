import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerserviceService } from 'src/app/service/CustomerserviceService';
import { User } from '../../model/user';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  alert:boolean=false;
  user:User=new User(0,"","");
  createdCustomer:Customer=new Customer("","","","",new Date(),"","","","",this.user);
  createdFlag:boolean=false;
  service:CustomerserviceService;
  router:Router;
  constructor(service:CustomerserviceService,router:Router) {
    this.service=service;
    this.router=router;
   }

  ngOnInit(): void {
  }
  add(data:any){
    console.log(data.user);
    //this.user.userId=data.userId;
    this.user.password=data.password;
    this.user.role=data.role;
    this.createdCustomer=new Customer(data.cust_id,data.customerName,data.mobileNumber,data.emailId,data.dateOfBirth,data.gender,data.nationality,data.aadharNumber,data.panNumber,this.user);
    this.service.addCustomer(this.createdCustomer);
    console.log(this.createdCustomer);
    this.createdFlag=true;
    // this.router.navigate(['/show-all']);
    this.alert=true;
    
  }
  closeAlert()
  {
    this.alert=false;
  }
}
