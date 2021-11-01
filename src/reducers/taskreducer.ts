import { Tasks } from "../types";

export enum ACTIONS {
  ADD = "ADD",
}

export type Action = {
  type: ACTIONS;
  payload: any;
};

const TasksReducer = (state: Tasks, action: Action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.ADD: {
      console.log(`${payload}  ${type}`);
      state.push(payload);
      return [...state];
    }

    default:
      return state;
  }
};

export default TasksReducer;
