import {Injectable} from "@angular/core";
import {DailyActivity} from "./activities.model";
import * as moment from "moment";
import {mapToString, stringToMap} from "./daily-activity.mapper";

@Injectable({
  providedIn: 'root',
})
export class DailyActivityRepository {

  private static readonly localStorageKey = 'dailyActivities';

  findAll(): Map<number, DailyActivity> {
    const dailyActivities = localStorage.getItem(DailyActivityRepository.localStorageKey);
    if (dailyActivities) {
      const dailyActivityMap = stringToMap(dailyActivities);
      this.removeActivitiesFromPreviousDays(dailyActivityMap);
      return dailyActivityMap;
    }
    return new Map<number, DailyActivity>();
  }

  private removeActivitiesFromPreviousDays(dailyActivityMap: Map<number, DailyActivity>): void {
    for (let activity of dailyActivityMap.values()) {
      if (!this.isForToday(activity)) {
        dailyActivityMap.delete(activity.activity.activityId);
      }
    }
  }

  private isForToday(activity: DailyActivity): boolean {
    return moment(activity.date).isBetween(
      moment().startOf('day'),
      moment().endOf('day'),
      null,
      '[]'
    );
  }

  save(activityMap: Map<number, DailyActivity>): void {
    localStorage.setItem(
      DailyActivityRepository.localStorageKey,
      mapToString(activityMap)
    );
  }

}
