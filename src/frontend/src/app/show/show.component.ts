import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  trainee1:string="";
  flag=false;
  constructor() { }

  ngOnInit(): void {
  }
  fun(trainee:any){
    //console.log(trainee);
    this.trainee1=trainee;
  }
}
