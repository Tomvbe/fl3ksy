import { Component, OnInit } from '@angular/core';
import {AudioService} from "../audio.service";
import {TimerService} from "../timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  display = this.timerService.display;
  isRunning = this.timerService.isRunning;

  constructor(
    private readonly audioService: AudioService,
    private readonly timerService: TimerService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.timerService.toggleStartPause();
  }

  reset() {
    this.timerService.reset();
  }

}
