import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/service/CustomerserviceService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeLoanApp';
  router:Router;
  //service:CustomerserviceService;
  constructor(/*service:CustomerserviceService,*/router:Router){
    //this.service = service;
    this.router = router;
  }
  ngOnInit(): void {
    //this.router.navigate(['app-customer']);
  }
  
}
