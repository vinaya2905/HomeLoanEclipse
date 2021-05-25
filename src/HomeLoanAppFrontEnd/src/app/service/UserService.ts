
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
@Injectable({
    providedIn: 'root'
  })
export class UserService{
    http: HttpClient;
  errormsg: any;

    constructor( http:HttpClient){
        this.http = http;
    }
    login(usr: User) {
      const headers = { 'content-type': 'application/json'};
      const body=JSON.stringify(usr);  
        console.log('---------');
        console.log(body);
        this.http.post('http://localhost:8086/user/signIn',body,{'headers':headers}).subscribe(
           data=>{
             let dataVal = Object.values(data);
             usr.userId=dataVal[0];
             usr.password=dataVal[1];
             usr.role=dataVal[2];
           },error=>{(
             this.errormsg=error
           )}
         );
      }
}