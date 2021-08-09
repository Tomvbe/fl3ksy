import {createFeatureSelector, createSelector} from "@ngrx/store";
import NoSleep from "nosleep.js";

export enum TimerStatus {
  PAUSE, STRETCH, REST
}

export interface TimerStatusInfo {
  name: string,
  style: string
}

export const timerStatusMap = new Map<TimerStatus, TimerStatusInfo>([
  [TimerStatus.PAUSE, {name: "Pause", style: 'pause-status'}],
  [TimerStatus.STRETCH, {name: "Stretch", style: 'stretch-status' }],
  [TimerStatus.REST, {name: "Rest", style: 'rest-status' }]
]);

export interface TimerState {
  current: TimerStatus,
  prev: TimerStatus,
  stretchTime: number,
  restTime: number,
  isStayAwake: boolean,
  noSleep: NoSleep | undefined
}

export const getTimerState = createFeatureSelector<TimerState>('timer');

export const getCurrentStatus = createSelector(getTimerState,(state) => {
  return state.current
});
export const isStretchingOrResting = createSelector(getTimerState,
  (state) => state.current === TimerStatus.STRETCH || state.current === TimerStatus.REST);
