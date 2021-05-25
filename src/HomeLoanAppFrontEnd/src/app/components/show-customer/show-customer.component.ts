import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { User } from 'src/app/model/user';
import { CustomerserviceService } from 'src/app/service/CustomerserviceService';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
  customerService:CustomerserviceService;
  router:Router;
  customer: Customer=new Customer("","","","",new Date(),"","","","",new User(0,"",""));
  constructor(customerService:CustomerserviceService,router:Router,private http:HttpClient) {
    this.customerService=customerService;
    this.router=router;

  }
  customers:Customer[]=[];
  ngOnInit(): void {
    this.customerService.fetchCustomers();
    this.customers=this.customerService.getCustomers();
    console.log(this.customers);
   // console.log(this.customers[0].user.)
  }
  updateCustomer(id:any){
    this.router.navigate(['/update-customer/'+id]);
  }
  
}
