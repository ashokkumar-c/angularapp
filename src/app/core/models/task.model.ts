export interface Task {
  task: string,
  parentTaskId: string,
  startDate: Date,
  endDate: Date,
  priority: Number,
  isCompleted: boolean
}
