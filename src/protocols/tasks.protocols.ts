export type Tasks = {
  tasks_id: Number;
  name: string;
  description: string;
  project_id: number;
  created_at: Date;
  done: boolean;
};

export type Task = {
  name: string;
  description: string;
  project_id: number;
};

export type NewTask = Partial<Tasks>;

export type TaskUpdate = Omit<
  Tasks,
  "tasks_id" | "name" | "description" | "project_id" | "created_at"
>;
