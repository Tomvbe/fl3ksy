import {createAction} from "@ngrx/store";

export const startPauseToggleAction = createAction('[Timer Component] Play');
export const pauseAction = createAction('[Timer Component] Pause');
export const resetAction = createAction('[Timer Component] Reset');
export const finishAction = createAction('[Timer Component] Finish');
export const stayAwakeAction = createAction('[Timer Component] Stay Awake');
export const allowSleepAction = createAction('[Timer Component] Allow sleep');

