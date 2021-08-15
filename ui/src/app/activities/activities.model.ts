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

export interface ActivityLog {
  activityId: number;
  timestamp: number;
}
