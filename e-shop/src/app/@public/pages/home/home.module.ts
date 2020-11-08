import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule implements OnInit{
  
  ngOnInit(): void {
    console.log('home component')
    throw new Error('Method not implemented.');
  }
}
