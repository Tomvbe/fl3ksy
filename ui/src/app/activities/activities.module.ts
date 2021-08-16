import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { WipComponent } from './wip/wip.component';
import {SharedModule} from "../shared/shared.module";
import { DayTrackerComponent } from './day-tracker/day-tracker.component';
import { ActivityListComponent } from './day-tracker/activity-list/activity-list.component';
import { AddActivityComponent } from './day-tracker/add-activity/add-activity.component';
import { DayTrackerContainerComponent } from './day-tracker/container/day-tracker-container.component';


@NgModule({
  declarations: [
    ActivitiesComponent,
    WipComponent,
    DayTrackerComponent,
    ActivityListComponent,
    AddActivityComponent,
    DayTrackerContainerComponent
  ],
    imports: [
        CommonModule,
        ActivitiesRoutingModule,
        SharedModule
    ]
})
export class ActivitiesModule { }
