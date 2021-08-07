import {Injectable} from '@angular/core';
import {AudioService} from "./audio.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {finishAction, resetAction, startPauseToggleAction} from "./store/timer.actions";
import {
  getCurrentStatus,
  isStretchingOrResting,
  TimerState,
  TimerStatus,
  TimerStatusInfo,
  timerStatusMap
} from "./store/timer.model";
import {TypedAction} from "@ngrx/store/src/models";

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timerInterval: number | undefined;
  private elapsedTime = 0;
  private _stretchTime = 2000;
  private _restTime = 2000;

  private subscription: Subscription;

  private readonly display$ = new BehaviorSubject(this.timeToString(this._stretchTime));

  constructor(
    private readonly audioService: AudioService,
    private readonly store: Store<TimerState>
  ) {
    this.subscription = this.store.select(getCurrentStatus).pipe(
      map(newStatus => {
        switch (newStatus) {
          case TimerStatus.PAUSE: return this.pause();
          case TimerStatus.STRETCH: return this.stretch();
          case TimerStatus.REST: return this.rest();
        }
      })
    ).subscribe();
  }

  toggleStartPause() {
    this.store.dispatch(startPauseToggleAction());
  }

  reset() {
    this.restartTimer(resetAction());
  }

  getDisplay(): Observable<string> {
    return this.display$;
  }

  isStretchingOrResting() {
    return this.store.select(isStretchingOrResting);
  }

  getCurrentStatusInfo(): Observable<TimerStatusInfo | undefined> {
    return this.store.select(getCurrentStatus).pipe(map(status => timerStatusMap.get(status)))
  }

  set stretchTime(value: number) {
    this._stretchTime = value;
  }

  set restTime(value: number) {
    this._restTime = value;
  }

  private pause() {
    clearInterval(this.timerInterval);
  }

  private stretch() {
    this.audioService.letsGo();
    this.start(this._stretchTime, () => {
      this.audioService.finished();
      this.restartTimer(finishAction())
    });
  }

  private rest() {
    this.start(this._restTime, () => this.restartTimer(finishAction()));
  }

  private start(totalTime: number, finishedFn: Function) {
    const startTime = Date.now() - this.elapsedTime;
    this.timerInterval = setInterval(() => {
      this.elapsedTime = Date.now() - startTime;
      this.display$.next(this.timeToString(totalTime - this.elapsedTime));
      if (this.elapsedTime > totalTime) {
        finishedFn();
      }
    }, 10);
  }

  private restartTimer(action: TypedAction<any>) {
    clearInterval(this.timerInterval);
    this.display$.next(this.timeToString(this._stretchTime));
    this.elapsedTime = 0;
    this.store.dispatch(action);
  }

  private timeToString(time: number): string {
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
