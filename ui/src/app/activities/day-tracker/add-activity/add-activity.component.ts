import {Component, OnInit} from '@angular/core';
import {Activity} from "../../activities.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DailyActivityService} from "../../daily-activity.service";
import {ActivityService} from "../../activity.service";

@Component({
  selector: 'day-tracker-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit{

  activitiesThatCanBeAdded$ = this.dailyActivityService.getActivitiesNotYetAddedToDay();
  selectedActivity: Activity | undefined;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dailyActivityService: DailyActivityService,
    private readonly activities: ActivityService
  ) {}

  ngOnInit(): void {
  }

  create() {
    if (this.selectedActivity) {
      this.dailyActivityService.create(this.selectedActivity);
      this.navigateToPreviousPage();
    }
  }

  private navigateToPreviousPage(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
