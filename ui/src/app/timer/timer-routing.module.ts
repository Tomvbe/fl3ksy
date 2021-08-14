import {RouterModule, Routes} from "@angular/router";
import {TimerContainerComponent} from "./container/timer-container.component";
import {TimerSettingsComponent} from "./settings/timer-settings.component";
import {NgModule} from "@angular/core";
import {StopwatchComponent} from "./stopwatch/stopwatch.component";

const routes: Routes = [
  { path: 'timer', component: TimerContainerComponent, children: [
      {path: '', component: StopwatchComponent},
      {path: 'settings', component: TimerSettingsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule {}
