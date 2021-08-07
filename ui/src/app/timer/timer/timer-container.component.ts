import {Component, OnDestroy} from '@angular/core';
import {TimerService} from "../timer.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Action} from "../timer-action/timer-action";

@Component({
  selector: 'app-timer',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnDestroy {

  display$: Observable<string> = this.timer.getDisplay();
  isRunning$: Observable<boolean> = this.timer.isRunning();
  action$: Observable<Action> = this.timer.isRunning().pipe(
    map(isRunning => isRunning ?
      { name: 'Stretch', class: 'stretch-action' } :
      { name: 'Rest', class: 'rest-action' }
    ));

  constructor(private readonly timer: TimerService) { }

  ngOnDestroy(): void {
    this.timer.reset();
  }

  reset() {
    this.timer.reset();
  }

  toggleStartPause() {
    this.timer.toggleStartPause();
  }
}
