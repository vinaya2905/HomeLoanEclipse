import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/service/CustomerserviceService';
import { Customer } from '../../model/customer';
import { User } from '../../model/user';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  
  Id: String="";
  customer:Customer;
  alert:boolean=false;
  message='';
  constructor(private route:ActivatedRoute,private customerService:CustomerserviceService,private router:Router) {
   
    this.customer=new Customer("","","","",new Date(),"","","","",new User(0,"",""));
   }

  ngOnInit(): void {
    this.message = '';
    this.customer=new Customer("","","","",new Date(),"","","","",new User(0,"",""));
    this.Id = this.route.snapshot.params['id'];
    this.customerService.read(this.Id).subscribe
      (data=>{
        console.log(data)
        this.customer=data;
      },error=>console.log(error));
    
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }
  
  getCustomer(id: any):void{
    this.customerService.read(id)
      .subscribe(
        response => {
          this.customer = response;
        },
        error => {
          console.log(error);
        });
  }
  updateCustomer(){
    this.customerService.updateCustomer(this.Id,this.customer).subscribe(
      data=>{
        console.log(data);
        this.customer=new Customer("","","","",new Date(),"","","","",new User(0,"",""));
        //this.gotoList();
      },error=>console.log(error)
      
    );
    this.alert=true;
  }
  onSubmit() {
    this.updateCustomer();    
  }
  gotoList() {
    this.alert=true;
    this.router.navigate(['/show-all']);
  }
  closeAlert()
  {
    this.alert=false;
  }

}

