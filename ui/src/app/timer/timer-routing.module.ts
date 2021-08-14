import {RouterModule, Routes} from "@angular/router";
import {TimerContainerComponent} from "./timer/timer-container.component";
import {TimerSettingsComponent} from "./timer-settings/timer-settings.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', component: TimerContainerComponent},
  { path: 'settings', component: TimerSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule {}
