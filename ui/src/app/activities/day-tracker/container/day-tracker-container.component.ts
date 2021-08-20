import { Component, OnInit } from '@angular/core';
import {DailyActivityService} from "../../daily-activity.service";
import {DailyActivity} from "../../activities.model";

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

  removeActivityExecution(dailyActivity: DailyActivity) {
    this.dailyActivityService.decrementCount(dailyActivity);
  }

  addActivityExecution(dailyActivity: DailyActivity) {
    this.dailyActivityService.incrementCount(dailyActivity);
  }
}
