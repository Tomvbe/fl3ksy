import {Injectable} from '@angular/core';
import {AudioService} from "./audio.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private readonly isRunning$ = new BehaviorSubject(false);
  private readonly display$ = new BehaviorSubject('00:05:00');

  private timerInterval: number | undefined;
  private elapsedTime = 0;

  constructor(
    private readonly audioService: AudioService,
  ) { }

  toggleStartPause() {
    this.isRunning$.value ? this.pause() : this.start();
    this.isRunning$.next(!this.isRunning$.value);
  }

  reset() {
    clearInterval(this.timerInterval);
    this.display$.next('00:05:00');
    this.elapsedTime = 0;
    this.isRunning$.next(false);
  }

  isRunning(): Observable<boolean> {
    return this.isRunning$;
  }

  getDisplay(): Observable<string> {
    return this.display$;
  }

  private start() {
    this.audioService.letsGo();

    const startTime = Date.now() - this.elapsedTime;
    this.timerInterval = setInterval(() => {
      this.elapsedTime = Date.now() - startTime;
      this.display$.next(TimerService.timeToString(5000 - this.elapsedTime));
      if (this.elapsedTime > 5000) {
        this.audioService.finished();
        this.reset()
      }
    }, 10);
  }

  private pause() {
    clearInterval(this.timerInterval);
  }

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
}
