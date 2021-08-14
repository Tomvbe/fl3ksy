import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeButtonComponent} from "./home-button/home-button.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeButtonComponent
  ],
  exports: [
    HomeButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
