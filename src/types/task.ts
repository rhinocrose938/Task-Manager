export type TaskStatus =
  | "pending"
  | "inprogress"
  | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: number;
}
