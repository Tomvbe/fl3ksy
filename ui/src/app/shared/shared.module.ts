import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeButtonComponent} from "./home-button/home-button.component";
import {RouterModule} from "@angular/router";
import {ReturnButtonComponent} from "./return-button/return-button.component";

@NgModule({
  declarations: [
    HomeButtonComponent,
    ReturnButtonComponent,
  ],
  exports: [
    HomeButtonComponent,
    ReturnButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
