import {Action, createReducer, on} from "@ngrx/store";
import {allowSleepAction, finishAction, resetAction, startPauseToggleAction, stayAwakeAction} from "./timer.actions";
import {TimerState, TimerStatus} from "./timer.model";
import NoSleep from "nosleep.js";

export const initialState: TimerState = {
  isStayAwake: false,
  noSleep: undefined,
  restTime: 2000,
  stretchTime: 5000,
  current: TimerStatus.PAUSE,
  prev: TimerStatus.STRETCH
};

const _timerReducer = createReducer(
  initialState,
  on(startPauseToggleAction, (state) => {
    return {
      ...state,
      current: TimerStatus.PAUSE === state.current ? state.prev : TimerStatus.PAUSE,
      prev: state.current
    }
  }),
  on(resetAction, (state) => {
    return {
      ...initialState,
      restTime: state.restTime,
      stretchTime: state.stretchTime
    }
  }),
  on(finishAction, (state) => {
    return {
      ...state,
      current: state.current == TimerStatus.STRETCH ? TimerStatus.REST : TimerStatus.STRETCH,
      prev: state.current
    }
  }),
  on(stayAwakeAction, (state) => {

    const noSleep = state.noSleep ? state.noSleep : new NoSleep();
    if (!state.isStayAwake) {
      noSleep.enable().finally();
      // todo mss effect nodig
    }

    return {
      ...state,
      isStayAwake: true,
      noSleep
    }
  }),
  on(allowSleepAction, (state) => {
    if (state.isStayAwake) {
      // state.noSleep.disable();
    }

    return {
      ...state,
      isStayAwake: false
    }
  })
);

export function timerReducer(state: TimerState | undefined, action: Action) {
  return _timerReducer(state, action);
}
