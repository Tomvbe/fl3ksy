import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Action} from "./timer-action";

@Component({
  selector: 'app-timer-action',
  templateUrl: './timer-action.component.html',
  styleUrls: ['./timer-action.component.scss']
})
export class TimerActionComponent {

  @Input() action$: Observable<Action> | undefined

}
