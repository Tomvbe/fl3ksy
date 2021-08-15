import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import {WipComponent} from "./wip/wip.component";

const routes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'wip', component: WipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
