import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerContainerComponent } from './timer/timer-container.component';
import {FormsModule} from "@angular/forms";
import { TimerActionComponent } from './timer-action/timer-action.component';
import { TimerClockComponent } from './timer-clock/timer-clock.component';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';



@NgModule({
  declarations: [
    TimerContainerComponent,
    TimerActionComponent,
    TimerClockComponent,
    TimerControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TimerContainerComponent
  ]
})
export class TimerModule { }
