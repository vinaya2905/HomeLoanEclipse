import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Country} from './country';
@Component({
  selector: 'app-covid-client',
  templateUrl: './covid-client.component.html',
  styleUrls: ['./covid-client.component.css']
})
export class CovidClientComponent implements OnInit {

  country:Country=new Country();
  constructor(private covidClient:HttpClient) { }

  ngOnInit(): void {
  }
  public covidInfo(country:string) {
    this.country=new Country();
    this.covidClient.get<Country>("https://covid19.mathdro.id/api/countries/" + country).subscribe(
      (response)=>{this.country=response}
    );
  }

}
