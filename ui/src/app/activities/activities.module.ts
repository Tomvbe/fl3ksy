import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { WipComponent } from './wip/wip.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ActivitiesComponent,
    WipComponent
  ],
    imports: [
        CommonModule,
        ActivitiesRoutingModule,
        SharedModule
    ]
})
export class ActivitiesModule { }
