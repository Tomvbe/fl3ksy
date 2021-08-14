import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerContainerComponent} from './container/timer-container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TimerStatusInfoComponent} from './stopwatch/timer-status-info/timer-status-info.component';
import {TimerClockComponent} from './stopwatch/timer-clock/timer-clock.component';
import {TimerControlsComponent} from './stopwatch/timer-controls/timer-controls.component';
import {TimerIntervalInputComponent} from './settings/timer-interval-input/timer-interval-input.component';
import {StoreModule} from "@ngrx/store";
import {timerReducer} from "./store/timer.reducer";
import {TimerSettingsComponent} from './settings/timer-settings.component';
import {TimerSettingsButtonComponent} from './settings/timer-settings-button/timer-settings-button.component';
import {TimerRoutingModule} from "./timer-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerSettingsTitleComponent } from './settings/timer-settings-title/timer-settings-title.component';
import { ReturnButtonComponent } from './return-button/return-button.component';
import {HomeButtonComponent} from "../shared/home-button/home-button.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TimerContainerComponent,
    TimerStatusInfoComponent,
    TimerClockComponent,
    TimerControlsComponent,
    TimerIntervalInputComponent,
    TimerSettingsComponent,
    TimerSettingsButtonComponent,
    StopwatchComponent,
    TimerSettingsTitleComponent,
    ReturnButtonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({timer: timerReducer}),
    TimerRoutingModule,
    SharedModule
  ],
  exports: [
    TimerContainerComponent
  ]
})
export class TimerModule { }
