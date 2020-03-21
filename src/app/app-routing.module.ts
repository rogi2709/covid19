import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DisplaydataComponent}from './pages/displaydata/displaydata.component'


const routes: Routes = [
  {path:'displaydata',component:DisplaydataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
