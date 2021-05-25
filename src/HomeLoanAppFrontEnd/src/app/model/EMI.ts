export class EMI{
    emiid:number;
    dueDate:Date;
    emiAmount:any;
    loanAmount:any;
    interestAmount:any;
    constructor(emiid:number,dueDate:Date, emiAmount:any,loanAmount:any,interestAmount:any){
        this.emiid=emiid;
        this.dueDate=dueDate;
        this.emiAmount=emiAmount;
        this.loanAmount=loanAmount;
        this.interestAmount=interestAmount;
    }

 }