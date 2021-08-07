import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimerContainerComponent} from "./timer/timer/timer-container.component";

const routes: Routes = [
  { path: '**', component: TimerContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
