import {Injectable} from '@angular/core';
import {Activity, DailyActivity, DATE_FORMAT} from "./activities.model";
import {BehaviorSubject, Observable} from "rxjs";
import * as moment from "moment";
import {replacer, reviver} from "../shared/util/map.serializer";
import {ActivityService} from "./activity.service";

@Injectable({
  providedIn: 'root'
})
export class DailyActivityService {

  private static readonly localStorageKey = 'dailyActivities';

  private readonly activities$ = new BehaviorSubject<DailyActivity[]>([])

  constructor(private readonly activityService: ActivityService) {
    this.refresh();
  }

  refresh(activities: DailyActivity[] = this.getArrayFromMap(this.fetchDailyActivities())): void {
    this.activities$.next(activities);
  }

  create(activity: Activity): DailyActivity {
    const newDailyActivity = {
      dailyActivityId: Date.now(),
      activity,
      date: moment().format(DATE_FORMAT),
      countCompleted: 0
    } as DailyActivity;
    this.add(newDailyActivity);
    return newDailyActivity;
  }

  private add(activity: DailyActivity): void {
    const activityMap = this.fetchDailyActivities();
    activityMap.set(activity.activity.activityId, activity);
    this.saveActivities(activityMap);
    this.refresh(this.getArrayFromMap(activityMap));
  }

  remove(activity: DailyActivity) {
    const activityMap = this.fetchDailyActivities();
    activityMap.delete(activity.activity.activityId);
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

  private fetchDailyActivities(): Map<number, DailyActivity> {
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
        dailyActivityMap.delete(activity.activity.activityId);
      }
    }
  }

  private isForCurrentDay(activity: DailyActivity): boolean {
    return moment(activity.date).isBetween(
      moment().startOf('day'),
      moment().endOf('day'),
      null,
      '[]'
    );
  }

  private getArrayFromMap(map: Map<any, any>) {
    return Array.from(map.values());
  }

  getActivitiesNotYetAddedToDay(): Observable<Activity[]> {
    const map = this.fetchDailyActivities();
    const activeDailyActivities = Array.from(map.keys());

    return new BehaviorSubject<Activity[]>(
      this.activityService.getActivities()
        .filter(activity => !activeDailyActivities.includes(activity.activityId))
    );
  }
}
