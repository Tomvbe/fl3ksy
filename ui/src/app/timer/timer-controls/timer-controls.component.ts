import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent {

  @Input()
  isRunning$: Observable<boolean> | undefined;

  @Output()
  startPauseEvent = new EventEmitter();

  @Output()
  resetEvent = new EventEmitter();

  reset() {
    this.resetEvent.emit();
  }

  toggleStartPause() {
    this.startPauseEvent.emit();
  }

}
