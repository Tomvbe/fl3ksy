import { Injectable } from '@angular/core';
import {DailyActivity} from "./activities.model";
import {BehaviorSubject, Observable} from "rxjs";
import * as moment from "moment";

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
    this.activities$.next(activities);
  }

  add(activity: DailyActivity) {
    const activityMap = this.fetchActivities().set(activity.activity.activityId, activity);
    this.saveActivities(activityMap);
    this.refresh(this.getArrayFromMap(activityMap));
  }

  remove(activity: DailyActivity) {
    const activityMap = this.fetchActivities();
    activityMap.delete(activity.activity.activityId);
    this.saveActivities(activityMap);
    this.refresh(this.getArrayFromMap(activityMap));
  }

  findAll(): Observable<DailyActivity[]> {
    return this.activities$;
  }

  incrementCount(activity: DailyActivity) {
    this.add({...activity, countCompleted: ++activity.countCompleted});
  }

  decrementCount(activity: DailyActivity) {
    this.add({...activity, countCompleted: Math.max(0, --activity.countCompleted)});
  }

  private fetchActivities(): Map<number, DailyActivity> {
    const dailyActivities = localStorage.getItem(DailyActivityService.localStorageKey);
    if (dailyActivities) {
      const dailyActivityMap = JSON.parse(dailyActivities) as Map<number, DailyActivity>;
      this.removeActivitiesFromPreviousDays(dailyActivityMap);
      return dailyActivityMap;
    }
    return new Map<number, DailyActivity>();
  }

  private saveActivities(activityMap: Map<number, DailyActivity>) {
    localStorage.setItem(DailyActivityService.localStorageKey, JSON.stringify(activityMap));
  }

  private removeActivitiesFromPreviousDays(dailyActivityMap: Map<number, DailyActivity>) {
    for (let activity of dailyActivityMap.values()) {
      if (!this.isForCurrentDay(activity)) {
        dailyActivityMap.delete(activity.activity.activityId);
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
