import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  router:Router;
  constructor(router:Router) {
    this.router=router;
   }

  ngOnInit(): void {
    //this.router.navigate(['/add-book']);
  }

}
