import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesComponent} from './activities.component';
import {WipComponent} from "./wip/wip.component";
import {DayTrackerComponent} from "./day-tracker/day-tracker.component";
import {AddActivityComponent} from "./day-tracker/add-activity/add-activity.component";
import {DayTrackerContainerComponent} from "./day-tracker/container/day-tracker-container.component";

const routes: Routes = [
  {path: '', component: ActivitiesComponent},
  {
    path: 'daily', component: DayTrackerComponent, children: [
      {path: '', component: DayTrackerContainerComponent},
      {path: 'add', component: AddActivityComponent}
    ]
  },
  {path: 'wip', component: WipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {
}
