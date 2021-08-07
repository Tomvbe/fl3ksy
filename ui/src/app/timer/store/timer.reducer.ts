import {Action, createReducer, on} from "@ngrx/store";
import {finishAction, resetAction, startPauseToggleAction} from "./timer.actions";
import {TimerState, TimerStatus} from "./timer.model";

export const initialState: TimerState = {
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
  })
);

export function timerReducer(state: TimerState | undefined, action: Action) {
  return _timerReducer(state, action);
}
