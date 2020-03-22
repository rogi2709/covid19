import { Component, OnInit } from '@angular/core';
import{CovidapiService}from 'src/core/service/covidapi.service';



@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss'],
  styles: [`
        /* Column Priorities */
        @media only all {
            th.ui-p-6,
            td.ui-p-6,
            th.ui-p-5,
            td.ui-p-5,
            th.ui-p-4,
            td.ui-p-4,
            th.ui-p-3,
            td.ui-p-3,
            th.ui-p-2,
            td.ui-p-2,
            th.ui-p-1,
            td.ui-p-1 {
                display: none;
            }
        }
        
        /* Show priority 1 at 320px (20em x 16px) */
        @media screen and (min-width: 20em) {
            th.ui-p-1,
            td.ui-p-1 {
                display: table-cell;
            }
        }
        
        /* Show priority 2 at 480px (30em x 16px) */
        @media screen and (min-width: 30em) {
            th.ui-p-2,
            td.ui-p-2 {
                display: table-cell;
            }
        }
        
        /* Show priority 3 at 640px (40em x 16px) */
        @media screen and (min-width: 40em) {
            th.ui-p-3,
            td.ui-p-3 {
                display: table-cell;
            }
        }
        
        /* Show priority 4 at 800px (50em x 16px) */
        @media screen and (min-width: 50em) {
            th.ui-p-4,
            td.ui-p-4 {
                display: table-cell;
            }
        }
        
        /* Show priority 5 at 960px (60em x 16px) */
        @media screen and (min-width: 60em) {
            th.ui-p-5,
            td.ui-p-5 {
                display: table-cell;
            }
        }
        
        /* Show priority 6 at 1,120px (70em x 16px) */
        @media screen and (min-width: 70em) {
            th.ui-p-6,
            td.ui-p-6 {
                display: table-cell;
            }
        }
        `]
  
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
