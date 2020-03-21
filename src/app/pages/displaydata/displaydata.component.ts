import { Component, OnInit } from '@angular/core';
import{CovidapiService}from 'src/core/service/covidapi.service';



@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss'],
})
export class DisplaydataComponent implements OnInit {

  constructor(private api:CovidapiService) { }
  info;
  tutto;
  cols: any[];
  dataSource=this.tutto;
  
  ngOnInit(): void {
    this.cols = [
      { field: 'country', header: 'Country' },
      { field: 'cases', header: 'Cases' },
      { field: 'todayCases', header: 'Today cases' },
      { field: 'deaths', header: 'Deaths' },
      { field: 'todayDeaths', header: 'Today deaths'},
      { field: 'recovered', header: 'Recovered'},
      { field: 'active', header: 'Active'},  
      { field: 'critical', header: 'Critical'}, 
      { field: 'casesPerOneMillion', header: 'Cases per one million'}, 

  ];
   this.api.getTotal().subscribe((data)=>{
    
    this.info=data;
  });

  this.api.getCountries().subscribe((data)=>{
    
    this.tutto=data;

  });



}

}
