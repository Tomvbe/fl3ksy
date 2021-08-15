import { Component, OnInit } from '@angular/core';
import {ActivityService} from "./activity.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  clicksOnInit = localStorage.getItem('clicks');

  activities = this.activityService.getActivities();

  constructor(private readonly activityService: ActivityService) { }

  ngOnInit(): void {
  }

  clicked() {
    const clicks = localStorage.getItem('clicks');

    clicks != null
      ? localStorage.setItem('clicks', (parseInt(clicks) + 1) + '')
      : localStorage.setItem('clicks', '1');
  }
}
