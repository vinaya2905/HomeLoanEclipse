import {User} from "./user";
export class Customer{
    cust_id:string;
    customerName:string;
    mobileNumber:string;
    emailId:string;
    dateOfBirth:Date ;
    gender:string;
    nationality:string;
    aadharNumber:string;
    panNumber:string;
    user:User;
    constructor(cust_id:string,customerName:string,mobileNumber:string,emailId:string,dateOfBirth:Date,gender:string,nationality:string,aadharNumber:string,panNumber:string,user:User)
    {
        this.cust_id=cust_id;
        this.customerName=customerName;
        this.mobileNumber=mobileNumber;
        this.emailId=emailId;
        this.dateOfBirth=dateOfBirth;
        this.gender=gender;
        this.nationality=nationality;
        this.aadharNumber=aadharNumber;
        this.panNumber=panNumber;
        this.user=user;
    
    }
    
}
