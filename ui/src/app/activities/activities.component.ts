import { Component, OnInit } from '@angular/core';
import {ActivityService} from "./activity.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor(private readonly activityService: ActivityService) { }

  ngOnInit(): void {
  }

}
