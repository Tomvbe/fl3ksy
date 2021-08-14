import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimerService} from "../timer.service";
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

  constructor(
    private readonly timer: TimerService,
    private readonly stayAwakeService: StayAwakeService
  ) { }

  ngOnInit(): void {
    this.timerIsRunningSubscription = this.timer.isStretchingOrResting().pipe(
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

}
