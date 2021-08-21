import {DailyActivity} from "./activities.model";
import {replacer, reviver} from "../shared/util/map.serializer";

export function stringToMap(dailyActivities: string): Map<number, DailyActivity> {
  return JSON.parse(dailyActivities, reviver) as Map<number, DailyActivity>;
}

export const mapToString = (activityMap: Map<any, any>) => JSON.stringify(activityMap, replacer);
