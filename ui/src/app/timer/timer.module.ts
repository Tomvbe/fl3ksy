import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerContainerComponent} from './timer/timer-container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TimerStatusInfoComponent} from './timer-action/timer-status-info.component';
import {TimerClockComponent} from './timer-clock/timer-clock.component';
import {TimerControlsComponent} from './timer-controls/timer-controls.component';
import {TimerIntervalInputComponent} from './timer-interval-input/timer-interval-input.component';
import {StoreModule} from "@ngrx/store";
import {timerReducer} from "./store/timer.reducer";
import {TimerSettingsComponent} from './timer-settings/timer-settings.component';
import {TimerSettingsButtonComponent} from './timer-settings/timer-settings-button/timer-settings-button.component';
import {TimerRoutingModule} from "./timer-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    TimerContainerComponent,
    TimerStatusInfoComponent,
    TimerClockComponent,
    TimerControlsComponent,
    TimerIntervalInputComponent,
    TimerSettingsComponent,
    TimerSettingsButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({timer: timerReducer}),
    TimerRoutingModule
  ],
  exports: [
    TimerContainerComponent
  ]
})
export class TimerModule { }
