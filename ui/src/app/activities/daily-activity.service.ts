import {Injectable} from '@angular/core';
import {Activity, DailyActivity, DATE_FORMAT} from "./activities.model";
import {BehaviorSubject, Observable} from "rxjs";
import * as moment from "moment";
import {ActivityService} from "./activity.service";
import {DailyActivityRepository} from "./daily-activity.repository";
import {getArrayFromMap} from "../shared/util/generic.mapper";

@Injectable({
  providedIn: 'root'
})
export class DailyActivityService {

  private readonly activeDailyActivities$ = new BehaviorSubject<DailyActivity[]>([])
  private readonly inActiveActivities$ = new BehaviorSubject<Activity[]>([]);

  constructor(
    private readonly activityService: ActivityService,
    private readonly repository: DailyActivityRepository
  ) {
    this.refreshActiveDailyActivities();
  }

  refreshActiveDailyActivities(activities = this.repository.findAll()): void {
    this.activeDailyActivities$.next(getArrayFromMap(activities));
  }

  refreshInactiveActivities(activeDailyActivities = this.repository.findAll()) {
    this.inActiveActivities$.next(
      this.activityService.getActivities()
        .filter(activity => !Array.from(activeDailyActivities.keys()).includes(activity.activityId))
    );
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
    const activityMap = this.repository.findAll();
    activityMap.set(activity.activity.activityId, activity);
    this.repository.save(activityMap);
    this.refreshActiveDailyActivities(activityMap);
  }

  remove(activity: DailyActivity) {
    const activityMap = this.repository.findAll();
    activityMap.delete(activity.activity.activityId);
    this.repository.save(activityMap);
    this.refreshActiveDailyActivities(activityMap);
  }

  findAll(): Observable<DailyActivity[]> {
    return this.activeDailyActivities$;
  }

  incrementCount(activity: DailyActivity) {
    this.add({...activity, countCompleted: activity.countCompleted + 1 });
  }

  decrementCount(activity: DailyActivity) {
    this.add({...activity, countCompleted: Math.max(0, activity.countCompleted - 1)});
  }

  getActivitiesNotYetAddedToDay(): Observable<Activity[]> {
    this.refreshInactiveActivities(this.repository.findAll());
    return this.inActiveActivities$;
  }

}
