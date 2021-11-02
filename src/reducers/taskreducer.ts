import { STATUS, Tasks } from "../types";

export enum ACTIONS {
  ADD = "ADD",
  CHANGE_STATUS = "CHANGE_STATUS",
}

export type Action = {
  type: ACTIONS;
  payload: any;
};

const TasksReducer = (state: Tasks, action: Action) => {
  const { payload, type } = action;
  console.log(payload);
  switch (type) {
    case ACTIONS.ADD: {
      state.push(payload);
      return [...state];
    }

    case ACTIONS.CHANGE_STATUS: {
      const newstate = state.map((task) => {
        const taskCopy = { ...task };
        if (taskCopy.taskId === payload.taskId) {
          taskCopy.status === "ACTIVE"
            ? (taskCopy.status = "COMPLETED")
            : (taskCopy.status = "ACTIVE");
        }

        return taskCopy;
      });
      console.log(newstate);
      return newstate;
    }

    default:
      return state;
  }
};

export default TasksReducer;
