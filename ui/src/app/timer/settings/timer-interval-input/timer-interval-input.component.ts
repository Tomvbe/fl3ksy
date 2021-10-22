import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-interval-input',
  templateUrl: './timer-interval-input.component.html',
  styleUrls: ['./timer-interval-input.component.scss']
})
export class TimerIntervalInputComponent implements OnInit {

  @Input()
  stretch: number | undefined;

  @Input()
  rest: number | undefined;

  @Input()
  mute: boolean | undefined;

  @Output()
  changeStretchEvent = new EventEmitter();

  @Output()
  changeRestEvent = new EventEmitter();

  @Output()
  changeMuteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeStretch(value: string) {
    this.stretch = parseInt(value);
    this.changeStretchEvent.emit(this.stretch);
  }

  changeRest(value: string) {
    this.rest = parseInt(value);
    this.changeRestEvent.emit(this.rest);
  }

  changeMute(value: any) {
    this.mute = value.currentTarget.checked;
    this.changeMuteEvent.emit(this.mute);
  }
}
