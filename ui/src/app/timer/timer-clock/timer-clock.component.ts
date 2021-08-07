import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-timer-clock',
  templateUrl: './timer-clock.component.html',
  styleUrls: ['./timer-clock.component.scss']
})
export class TimerClockComponent {

  @Input()
  display$: Observable<string> | undefined;

}
