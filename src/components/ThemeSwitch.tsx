import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "../icons/moon.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";

interface IThemeSwitchProps {
  mode: string;
  switchThemeCallback: () => void;
}

const ThemeSwitch: React.FunctionComponent<IThemeSwitchProps> = ({
  mode,
  switchThemeCallback,
}) => {
  return (
    <Container>
      <AppTitle>TODO</AppTitle>
      {mode === "Light" ? (
        <Moon style={{ cursor: "pointer" }} onClick={switchThemeCallback} />
      ) : (
        <Sun style={{ cursor: "pointer" }} onClick={switchThemeCallback} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  line-height: 4rem;
  letter-spacing: 1.5rem;
  color: #ffffff;
`;

export default ThemeSwitch;
