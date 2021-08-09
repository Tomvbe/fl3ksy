import {Component, OnDestroy} from '@angular/core';
import {TimerService} from "../timer.service";
import {msToSeconds} from "../util/time.converter";

@Component({
  selector: 'app-timer',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss'],
  providers: [TimerService]
})
export class TimerContainerComponent implements OnDestroy {

  display$ = this.timer.getDisplay();
  isRunning$ = this.timer.isStretchingOrResting();
  statusInfo$ = this.timer.getCurrentStatusInfo();

  constructor(private readonly timer: TimerService) { }

  ngOnDestroy(): void {
    this.timer.dispose();
  }

  setStretchTime(stretchSeconds: number) {
    this.timer.stretchTime = stretchSeconds;
  }

  setRestTime(restSeconds: number) {
    this.timer.restTime = restSeconds;
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

  getDefaultRestTime() {
    return msToSeconds(TimerService.DEFAULT_REST_TIME);
  }

  getDefaultStretchTime() {
    return msToSeconds(TimerService.DEFAULT_STRETCH_TIME);
  }
}
