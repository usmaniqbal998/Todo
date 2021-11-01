import * as React from "react";
import styled from "styled-components";
import { ReactComponent as NoTasks } from "../icons/notasks.svg";
import Task from "./Task";
import { Tasks } from "../types";

interface ITasksCollectionProps {
  tasks: Tasks;
}
interface ContainerProps {
  length: number;
}

const TasksCollection: React.FC<ITasksCollectionProps> = ({ tasks }) => {
  return (
    <Container length={tasks.length}>
      {tasks.map((task) => (
        <Task key={task.taskId} status={task.status} title={task.title} />
      ))}
      {tasks.length === 0 && (
        <EmptyStateContainer>
          <NoTasks />
          <EmptyStateMessage>
            You are all Caught up. No Tasks
            <br /> for Today{" "}
          </EmptyStateMessage>
        </EmptyStateContainer>
      )}
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.componentBackgroundColor};
  box-shadow: ${(props) => props.theme.componentsBoxShadow};
  border-radius: 5px;
  height: 60rem;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.length === 0 && "center"};
  align-items: ${(props) => props.length === 0 && "center"};
  overflow: hidden;
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
