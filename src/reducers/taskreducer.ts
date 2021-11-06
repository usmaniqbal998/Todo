import { Tasks } from "../types";

export enum ACTIONS {
  ADD = "ADD",
  CHANGE_STATUS = "CHANGE_STATUS",
  CLEAR_COMPLETED = "CLEAR_COMPLETED",
}

export type Action = {
  type: ACTIONS;
  payload: any;
};

const TasksReducer = (state: Tasks, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.ADD: {
      state.push(payload);
      return [...state];
    }

    case ACTIONS.CLEAR_COMPLETED: {
      return state.map((task) => {
        task.status = "ACTIVE";
        return task;
      });
    }

    case ACTIONS.CHANGE_STATUS: {
      return state.map((task) => {
        const taskCopy = { ...task };
        if (taskCopy.taskId === payload.taskId) {
          taskCopy.status === "ACTIVE"
            ? (taskCopy.status = "COMPLETED")
            : (taskCopy.status = "ACTIVE");
        }
        return taskCopy;
      });
    }

    default:
      return state;
  }
};

export default TasksReducer;
