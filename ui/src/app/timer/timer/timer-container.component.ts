import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimerService} from "../timer.service";
import {msToSeconds} from "../util/time.converter";
import {StayAwakeService} from "../stay-awake.service";
import {tap} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss'],
  providers: [TimerService]
})
export class TimerContainerComponent implements OnInit, OnDestroy {

  timerIsRunningSubscription!: Subscription;
  display$ = this.timer.getDisplay();
  isRunning$ = this.timer.isStretchingOrResting();
  statusInfo$ = this.timer.getCurrentStatusInfo();

  constructor(
    private readonly timer: TimerService,
    private readonly stayAwakeService: StayAwakeService
  ) { }

  ngOnInit(): void {
    this.timerIsRunningSubscription = this.isRunning$.pipe(
      tap(isRunning => isRunning
        ? this.stayAwakeService.stayAwake()
        : this.stayAwakeService.allowSleep()
      )
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.timer.dispose();
    this.timerIsRunningSubscription.unsubscribe();
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
