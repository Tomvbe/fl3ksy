import {Component, OnDestroy} from '@angular/core';
import {TimerService} from "../timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnDestroy {

  display$ = this.timer.getDisplay();
  isRunning$ = this.timer.isStretchingOrResting();
  statusInfo$ = this.timer.getCurrentStatusInfo();

  constructor(private readonly timer: TimerService) { }

  ngOnDestroy(): void {
    this.timer.reset();
  }

  setStretchTime() {
    this.timer.stretchTime = 10000;
  }

  setRestTime() {
    this.timer.restTime = 5000;
  }

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
