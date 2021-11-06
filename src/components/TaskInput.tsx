import * as React from "react";
import styled from "styled-components";
import { Action, ACTIONS } from "../reducers/taskreducer";
import { v4 as uid } from "uuid";
import { device } from "../styles/devices";

interface ITaskInputProps {
  actionDispatcher: React.Dispatch<Action>;
}

const TaskInput: React.FunctionComponent<ITaskInputProps> = ({
  actionDispatcher,
}) => {
  const [taskInput, setTaskInput] = React.useState("");

  const onTaskCreated = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && taskInput !== "") {
      //task creation event here
      actionDispatcher({
        type: ACTIONS.ADD,
        payload: { taskId: uid(), title: taskInput, status: "ACTIVE" },
      });
      //cleanup here
      setTaskInput("");
    }
  };
  return (
    <Container>
      <Oval />
      <Input
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Create a new todo.."
        onKeyDown={onTaskCreated}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.componentBackgroundColor};
  box-shadow: ${(props) => props.theme.componentsBoxShadow};
  border-radius: 0.5rem;
  height: 6.4rem;
  width: 100%;
  transition: background-color 0.3s ease-in;
  margin-top: 4rem;
  padding: 2rem 2.4rem;

  @media ${device.mobileL} {
    margin-top: 1.8rem;
    height: 4.8rem;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }
`;

const Oval = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.componentBackgroundColor};
  border: ${(props) =>
    props.theme.mode === "light" ? "1px solid #e3e4f1" : "1px solid #393A4B"};
  transition: all 0.3s ease-in;

  @media ${device.mobileL} {
    width: 2rem;
    height: 2rem;
  }
`;

const Input = styled.input`
  caret-color: "#3A7CFD";
  color: "#393A4B";
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 1.8rem;
  letter-spacing: -0.25px;
  color: ${(props) => props.theme.textColor};
  flex: 1;
  border: 0;
  margin-left: 2.4rem;
  background-color: ${(props) => props.theme.componentBackgroundColor};
  &::placeholder {
    color: "#9495A5";
    font-family: "Josefin Sans", sans-serif;
  }
  transition: background-color 0.3s ease-in;
  &::focus {
    outline: none;
  }

  @media ${device.mobileL} {
    font-size: 1.4rem;
    line-height: 1.2rem;
    letter-spacing: -0.166667px;
    margin-left: 1.2rem;
  }
`;

export default TaskInput;
