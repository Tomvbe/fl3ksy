import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
