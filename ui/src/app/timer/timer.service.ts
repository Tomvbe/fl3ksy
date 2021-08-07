import { Injectable } from '@angular/core';
import {AudioService} from "./audio.service";

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  isRunning = false;
  timerInterval: number | undefined;
  elapsedTime = 0;
  display = '00:05:00';

  constructor(
    private readonly audioService: AudioService,
  ) { }

  private static timeToString(time: number) {
    const diffInHrs = time / 3600000;
    const hh = Math.floor(diffInHrs);

    const diffInMin = (diffInHrs - hh) * 60;
    const mm = Math.floor(diffInMin);

    const diffInSec = (diffInMin - mm) * 60;
    const ss = Math.floor(diffInSec);

    const diffInMs = (diffInSec - ss) * 100;
    const ms = Math.floor(diffInMs);

    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");
    const formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

  toggleStartPause() {
    this.isRunning ? this.pause() : this.start();
    this.isRunning = !this.isRunning;
  }

  private start() {
    this.audioService.letsGo();
    const startTime = Date.now() + 5000;
    this.timerInterval = setInterval(() => {
      this.elapsedTime = startTime - Date.now();
      this.display = TimerService.timeToString(this.elapsedTime);
      console.log(this.elapsedTime)
      if (this.elapsedTime < 0) {
        this.reset()
      }
    }, 100);
  }

  private pause() {
    clearInterval(this.timerInterval);
  }

  reset() {
    clearInterval(this.timerInterval);
    this.display = '00:05:00';
    this.elapsedTime = 0;
    this.isRunning = false;
  }
}
