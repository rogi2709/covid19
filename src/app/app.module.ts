import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import{DisplaydataComponent}from './pages/displaydata/displaydata.component'
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    DataViewModule,
    DialogModule,
    PanelModule,
    BrowserAnimationsModule,
    MatTableModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
