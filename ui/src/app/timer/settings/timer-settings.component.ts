import {Component, OnInit} from '@angular/core';
import {msToSeconds} from "../util/time.converter";
import {TimerService} from "../timer.service";

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.scss']
})
export class TimerSettingsComponent implements OnInit {

  constructor(private readonly timer: TimerService) { }

  ngOnInit(): void {
    console.log('init settings')
  }

  setStretchTime(stretchSeconds: number) {
    this.timer.stretchTime = stretchSeconds;
  }

  setRestTime(restSeconds: number) {
    this.timer.restTime = restSeconds;
  }

  getRestTime() {
    return msToSeconds(this.timer.restTime);
  }

  getStretchTime() {
    return msToSeconds(this.timer.stretchTime);
  }

  toggleMute(isMuteOn: boolean) {
    isMuteOn ? this.timer.turnOffSound() : this.timer.turnOnSound();
  }

  isMuted() {
    return this.timer.isMuted();
  }
}
