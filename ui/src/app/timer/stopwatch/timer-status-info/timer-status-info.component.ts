import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {TimerStatusInfo} from "../../store/timer.model";

@Component({
  selector: 'app-timer-status-info',
  templateUrl: './timer-status-info.component.html',
  styleUrls: ['./timer-status-info.component.scss']
})
export class TimerStatusInfoComponent {

  @Input() statusInfo$: Observable<TimerStatusInfo | undefined> | undefined

}
