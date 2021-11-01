export enum STATUS {
  Completed = "COMPLETED",
  Active = "ACTIVE",
}

export interface task {
  taskId: string;
  title: string;
  status: STATUS;
}

export type Tasks = task[];
