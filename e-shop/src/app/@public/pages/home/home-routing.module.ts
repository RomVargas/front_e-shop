import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule implements OnInit{
  constructor(){
    console.log('home module construct')
  }
  ngOnInit(): void {
    console.log('home module')
    throw new Error('Method not implemented.');
  }
}
