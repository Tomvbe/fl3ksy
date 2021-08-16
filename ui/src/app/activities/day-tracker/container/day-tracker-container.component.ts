import { Component, OnInit } from '@angular/core';
import {DailyActivityService} from "../../daily-activity.service";

@Component({
  selector: 'day-tracker-container',
  templateUrl: './day-tracker-container.component.html',
  styleUrls: ['./day-tracker-container.component.scss']
})
export class DayTrackerContainerComponent implements OnInit {

  activities$ = this.dailyActivityService.findAll();

  constructor(
    private readonly dailyActivityService: DailyActivityService
  ) { }

  ngOnInit(): void {
  }

  removeActivityExecution($event: any) {
    this.dailyActivityService.decrementCount($event);
  }

  addActivityExecution($event: any) {
    this.dailyActivityService.incrementCount($event);
  }
}
