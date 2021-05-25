import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/UserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  errormsg="";
  createdUser:User=new User(0,"","");
  flag:boolean=false;
  userService:UserService;
  router:Router;
  constructor(router:Router,userService:UserService) {
    this.userService=userService;
    this.router=router;
   }

  ngOnInit(): void {
  }
  onLogin(val:any){
    console.log(val);
    console.log(val.userId+" "+val.password);
    this.createdUser=new User(val.userId,val.password,"");
    this.userService.login(this.createdUser);
    
    setTimeout(
      ()=>{
        console.log(this.createdUser);
    if(this.createdUser.role==""){
      console.log("wrong data");
      this.flag = true;
      this.errormsg=this.userService.errormsg;
    }
    else if(this.createdUser.role=="Customer"||this.createdUser.role=="customer"){
      this.router.navigate(['/customer-status/']);
    }
    else if(this.createdUser.role="FinanceOfficer")
    {
      this.router.navigate(['/show-finance/']);
    }
    else if(this.createdUser.role="LandOfficer")
    {
      this.router.navigate(['/show-land/']);
    }
    else if(this.createdUser.role="ADMIN")
    {
      this.router.navigate(['/showall-loanapplication/']);
    }
    else{
      this.router.navigate(['']);
    }        
      },1000
    );
  }
}

