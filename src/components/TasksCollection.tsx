import * as React from "react";
import styled from "styled-components";
import { ReactComponent as NoTasks } from "../icons/notasks.svg";
import Task from "./Task";
import { Tasks } from "../types";
import { Action, ACTIONS } from "../reducers/taskreducer";

interface ITasksCollectionProps {
  tasks: Tasks;
  actionDispatcher: React.Dispatch<Action>;
}
interface TasksContainerProps {
  length: number;
}

interface FlatBtnProps {
  active?: boolean;
}

const TasksCollection: React.FC<ITasksCollectionProps> = ({
  tasks,
  actionDispatcher,
}) => {
  const onStatusChanged = (id: string) => {
    actionDispatcher({ type: ACTIONS.CHANGE_STATUS, payload: { taskId: id } });
  };
  const [showTasksByStatus, setShowTasksByStatus] = React.useState("ALL");

  const activeTasks = tasks.filter((task) => task.status === "ACTIVE");
  const completedTasks = tasks.filter((task) => task.status === "COMPLETED");

  const getTasksToDisplay = () => {
    if (showTasksByStatus === "ACTIVE") return activeTasks;
    if (showTasksByStatus === "COMPLETED") return completedTasks;
    return tasks;
  };

  return (
    <Container>
      <TasksContainer length={tasks.length}>
        {getTasksToDisplay().map((task) => (
          <Task
            key={task.taskId}
            status={task.status}
            title={task.title}
            id={task.taskId}
            onStatusChangedCallback={onStatusChanged}
          />
        ))}
        {tasks.length === 0 && (
          <EmptyStateContainer>
            <NoTasks />
            <EmptyStateMessage>
              You are all Caught up. No Tasks
              <br /> for Today
            </EmptyStateMessage>
          </EmptyStateContainer>
        )}
      </TasksContainer>
      <BottomBar>
        <BottomCol>
          <FlatBtn>{activeTasks.length} items left</FlatBtn>
        </BottomCol>

        <BottomMidCol>
          <FlatBtn
            onClick={() => setShowTasksByStatus("ALL")}
            active={showTasksByStatus === "ALL"}
          >
            All
          </FlatBtn>
          <FlatBtn
            onClick={() => setShowTasksByStatus("ACTIVE")}
            active={showTasksByStatus === "ACTIVE"}
          >
            Active
          </FlatBtn>
          <FlatBtn
            onClick={() => setShowTasksByStatus("COMPLETED")}
            active={showTasksByStatus === "COMPLETED"}
          >
            Completed
          </FlatBtn>
        </BottomMidCol>

        <BottomCol>
          <FlatBtn
            onClick={() =>
              actionDispatcher({
                type: ACTIONS.CLEAR_COMPLETED,
                payload: {},
              })
            }
          >
            Clear Completed
          </FlatBtn>
        </BottomCol>
      </BottomBar>
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.componentBackgroundColor};
  box-shadow: ${(props) => props.theme.componentsBoxShadow};
  border-radius: 5px;
  height: 60rem;
  margin-top: 2.4rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FlatBtn = styled.button<FlatBtnProps>`
  color: ${(props) => (props.active ? "#3A7CFD" : props.theme.flatBtnColor)};
  font-size: 14px;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 4px;
  font-family: "Josefin Sans", sans-serif;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.flatBtnHoverColor};
  }
`;

const BottomCol = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BottomMidCol = styled(BottomCol)`
  flex: 1.5;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  & button {
    font-weight: 600;
  }
`;

const TasksContainer = styled.div<TasksContainerProps>`
  width: 100%;
  height: calc(100% - 6.2rem);
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.length === 0 && "center"};
  align-items: ${(props) => props.length === 0 && "center"};
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BottomBar = styled.div`
  display: flex;
  height: 6.2rem;
  width: 100%;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyStateMessage = styled.p`
  margin-top: 2.2rem;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.194444px;
  color: ${(props) => props.theme.textColor};
`;

export default TasksCollection;
