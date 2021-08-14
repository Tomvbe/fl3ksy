import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {TimerService} from "../timer.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {

  display$ = this.timer.getDisplay();
  isRunning$ = this.timer.isStretchingOrResting();
  statusInfo$ = this.timer.getCurrentStatusInfo();

  constructor(private readonly timer: TimerService,) {}

  reset() {
    this.timer.reset();
  }

  toggleStartPause() {
    this.timer.toggleStartPause();
  }

  restart() {
    this.reset();
    this.toggleStartPause();
  }

}
