import {Injectable, OnInit} from '@angular/core';
import {Activity, ActivityType} from "./activities.model";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() {
    if (!localStorage.getItem('activities')) {
      localStorage.setItem('activities', JSON.stringify(this.initLocalStorage()));
    }
  }

  getActivities(): Activity[] {
    const activities = localStorage.getItem('activities');
    if (!activities) {
      return [];
    }

    return JSON.parse(activities) as Activity[];
  }

  initLocalStorage(): Activity[] {
    return [
      {
        name: 'Fingers',
        type: ActivityType.STRETCH,
        description: 'Wall stretch for hand/fingers',
        stretchMs: 21000,
        restMs: 5000,
        setsPerDay: 3,
        iterationsInSet: 3,
        positionsPerIteration: 1,
      },
      {
        name: 'Wrists',
        type: ActivityType.STRETCH,
        description: 'Stretch flexors and extensors of both wrists.',
        stretchMs: 22500,
        restMs: 7000,
        setsPerDay: 3,
        iterationsInSet: 3,
        positionsPerIteration: 4
      },
      {
        name: 'Shoulders',
        type: ActivityType.STRETCH,
        description: 'Rotate shoulders back',
        stretchMs: 60000,
        restMs: 5000,
        setsPerDay: 3,
        iterationsInSet: 2,
        positionsPerIteration: 1
      },
      {
        name: 'Neck',
        type: ActivityType.STRETCH,
        description: 'Neck forward and sideways',
        stretchMs: 21000,
        restMs: 5000,
        setsPerDay: 3,
        iterationsInSet: 2,
        positionsPerIteration: 2
      },
      {
        name: 'Back',
        type: ActivityType.STRETCH,
        description: 'Flatten back against door',
        stretchMs: 61000,
        restMs: 6000,
        setsPerDay: 3,
        iterationsInSet: 3,
        positionsPerIteration: 1
      },      {
        name: 'Upside down glasses',
        type: ActivityType.STRETCH,
        description: 'Put on the glasses upside down (:',
        stretchMs: 20000,
        restMs: 5000,
        setsPerDay: 3,
        iterationsInSet: 3,
        positionsPerIteration: 1
      },
    ] as Activity[];
  }

}
