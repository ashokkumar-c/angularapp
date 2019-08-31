export interface Task {
  _id: string;
  parentTaskId: string;
  task: string;
  startDate: Date;
  endDate: Date;
  priority: number;
  is_completed: boolean;
  }
