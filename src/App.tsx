import React from "react";
import useThemeSwitch from "./hooks/useThemeSwitch";
import { lightTheme, darkTheme } from "./styles/themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalstyles";
import LightBG from "./images/bg-desktop-light.png";
import ThemeSwitch from "./components/ThemeSwitch";
import TaskInput from "./components/TaskInput";
import TasksCollection from "./components/TasksCollection";
import TasksReducer from "./reducers/taskreducer";
import { device } from "./styles/devices";

function App() {
  const [activeMode, switchTheme] = useThemeSwitch();
  const [tasks, dispatch] = React.useReducer(TasksReducer, []);

  return (
    <ThemeProvider theme={activeMode === "Light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Main>
        <ThemeSwitch mode={activeMode} switchThemeCallback={switchTheme} />
        <TaskInput actionDispatcher={dispatch} />
        <TasksCollection actionDispatcher={dispatch} tasks={tasks} />
      </Main>
      <TopBanner />
    </ThemeProvider>
  );
}

const TopBanner = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: ${(props) => {
    return `url(${LightBG}), ${props.theme.bannerGradient}`;
  }};
  width: 100%;
  height: 30rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom top;

  @media ${device.mobileL} {
    height: 22rem;
  }
`;

const Main = styled.div`
  height: 100vh;
  max-width: 54rem;
  margin: 0 auto;
  padding-top: 7.2rem;
  padding-bottom: 5.2rem;
  @media ${device.tablet} {
    padding-top: 5.2rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  @media ${device.mobileL} {
    padding-top: 4rem;
  }
`;

export default App;
