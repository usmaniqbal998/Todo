import React from "react";
import styled from "styled-components";
import { ReactComponent as Tick } from "../icons/tick.svg";
import { STATUS } from "../types";
import { IoMdClose } from "react-icons/io";
import { device } from "../styles/devices";

interface ITaskProps {
  status: STATUS;
  title: string;
  id: string;
  onStatusChangedCallback: (id: string) => void;
  onRemovedCallback: (id: string) => void;
}

interface TaskStyleProps {
  complete: boolean;
}

const Task: React.FunctionComponent<ITaskProps> = ({
  status,
  title,
  id,
  onStatusChangedCallback,
  onRemovedCallback,
}) => {
  return (
    <Container onClick={() => onStatusChangedCallback(id)}>
      <Oval complete={status === "COMPLETED"}>
        {status === "COMPLETED" && <Tick />}
      </Oval>
      <TaskTitle complete={status === "COMPLETED"}>{title}</TaskTitle>
      <CloseIcon onClick={() => onRemovedCallback(id)} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.componentBackgroundColor};
  width: 100%;
  height: 6.2rem;
  border-bottom: ${(props) => `1px solid ${props.theme.borderColor}`};
  padding: 2rem 2.4rem;
  &:hover {
    cursor: pointer;
  }

  &:hover svg {
    opacity: 1;
  }

  @media ${device.mobileL} {
    height: 4.8rem;
  }
`;

const Oval = styled.div<TaskStyleProps>`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: ${(props) =>
    props.complete
      ? "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)"
      : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    !props.complete && `1px solid ${props.theme.borderColor}`};
  transition: background 0.2s ease-in;

  @media ${device.mobileL} {
    width: 2rem;
    height: 2rem;
  }
`;

const CloseIcon = styled(IoMdClose)`
  color: ${(props) => props.theme.textColor};
  opacity: 0;
  transition: all 0.2s ease-in;
`;

const TaskTitle = styled.p<TaskStyleProps>`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 1.8rem;
  flex: 1;
  letter-spacing: -0.25px;
  margin-left: 2.4rem;
  color: ${(props) =>
    props.complete ? props.theme.completedText : props.theme.textColor};
  text-decoration: ${(props) => props.complete && "line-through"};
  transition: all 0.2s ease-in;

  @media ${device.mobileL} {
    font-size: 1.4rem;
    line-height: 1.2rem;
    letter-spacing: -0.166667px;
    margin-left: 1.2rem;
  }
`;

export default Task;
