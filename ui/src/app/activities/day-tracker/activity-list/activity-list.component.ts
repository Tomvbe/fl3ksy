import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DailyActivity} from "../../activities.model";
import {Observable} from "rxjs";

@Component({
  selector: 'day-tracker-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent {

  @Input()
  activities$!: Observable<DailyActivity[]>;

  @Output()
  addActivityExecution = new EventEmitter();

  @Output()
  removeActivityExecution = new EventEmitter();

  add(dayActivityId: number) {
    this.addActivityExecution.emit(dayActivityId);
  }

  remove(dayActivityId: number) {
    this.removeActivityExecution.emit(dayActivityId);
  }

}
