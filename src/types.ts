export type STATUS = "ACTIVE" | "COMPLETED";

export interface task {
  taskId: string;
  title: string;
  status: STATUS;
}

export type Tasks = task[];
