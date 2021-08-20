import { Injectable } from '@angular/core';
import {ActivityType, DailyActivity} from "./activities.model";
import {BehaviorSubject, Observable} from "rxjs";
import * as moment from "moment";
import {replacer, reviver} from "../shared/util/map.serializer";

@Injectable({
  providedIn: 'root'
})
export class DailyActivityService {

  private static readonly localStorageKey = 'dailyActivities';

  private readonly activities$ = new BehaviorSubject<DailyActivity[]>([])

  constructor() {
    this.refresh();
  }

  refresh(activities: DailyActivity[] = this.getArrayFromMap(this.fetchActivities())): void {
    // TODO remove after implementing add
    const activity = {
      dailyActivityId: 1,
      activity:
        {
          activityId: 2,
          name: 'Shoulders',
          type: ActivityType.STRETCH,
          description: 'Rotate shoulders back',
          stretchMs: 60000,
          restMs: 5000,
          setsPerDay: 3,
          iterationsInSet: 2,
          positionsPerIteration: 1
        },
      date: '2021-08-20',
      countCompleted: 2
    } as DailyActivity;

    const activity2 = {
      dailyActivityId: 2,
      activity:
        {
          activityId: 1,
          name: 'Back',
          type: ActivityType.STRETCH,
          description: 'Rotate shoulders back',
          stretchMs: 60000,
          restMs: 5000,
          setsPerDay: 2,
          iterationsInSet: 2,
          positionsPerIteration: 1
        },
      date: '2021-08-20',
      countCompleted: 2
    } as DailyActivity;

    this.activities$.next(activities?.length > 0 ? activities :[activity, activity2]);
    // this.activities$.next(activities);
  }

  add(activity: DailyActivity) {
    const activityMap = this.fetchActivities();
    activityMap.set(activity.dailyActivityId, activity);
    this.saveActivities(activityMap);
    this.refresh(this.getArrayFromMap(activityMap));
  }

  remove(activity: DailyActivity) {
    const activityMap = this.fetchActivities();
    activityMap.delete(activity.dailyActivityId);
    this.saveActivities(activityMap);
    this.refresh(this.getArrayFromMap(activityMap));
  }

  findAll(): Observable<DailyActivity[]> {
    return this.activities$;
  }

  incrementCount(activity: DailyActivity) {
    this.add({...activity, countCompleted: activity.countCompleted + 1 });
  }

  decrementCount(activity: DailyActivity) {
    this.add({...activity, countCompleted: Math.max(0, activity.countCompleted - 1)});
  }

  private fetchActivities(): Map<number, DailyActivity> {
    const dailyActivities = localStorage.getItem(DailyActivityService.localStorageKey);
    if (dailyActivities) {
      const dailyActivityMap = JSON.parse(dailyActivities, reviver) as Map<number, DailyActivity>;
      this.removeActivitiesFromPreviousDays(dailyActivityMap);
      return dailyActivityMap;
    }
    return new Map<number, DailyActivity>();
  }

  private saveActivities(activityMap: Map<number, DailyActivity>) {
    const stringify = JSON.stringify(activityMap, replacer);
    localStorage.setItem(DailyActivityService.localStorageKey, stringify);
  }

  private removeActivitiesFromPreviousDays(dailyActivityMap: Map<number, DailyActivity>): void {
    for (let activity of dailyActivityMap.values()) {
      if (!this.isForCurrentDay(activity)) {
        dailyActivityMap.delete(activity.dailyActivityId);
      }
    }
  }

  private isForCurrentDay(activity: DailyActivity): boolean {
    return moment(activity.date).isBetween(
      moment().startOf('day'),
      moment().endOf('day')
    );
  }

  private getArrayFromMap(map: Map<any, any>) {
    return Array.from(map.values());
  }
}
