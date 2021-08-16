export interface Activity {
  activityId: number;
  name: string;
  type: ActivityType;
  description?: string;
  stretchMs: number;
  restMs: number;
  setsPerDay: number;
  iterationsInSet: number;
  positionsPerIteration: number;
}

export enum ActivityType {
  STRETCH, POWER
}

export const DATE_FORMAT = 'YYYY-MM-DD';

export interface DailyActivity {
  dailyActivityId: number;
  activity: Activity;
  date: string;
  countCompleted: number;
}
