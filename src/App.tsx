import React from "react";
import useThemeSwitch from "./hooks/useThemeSwitch";
import { lightTheme, darkTheme } from "./styles/themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalstyles";
import LightBG from "./images/bg-desktop-light.png";
import DarkBG from "./images/bg-desktop-dark.png";
import ThemeSwitch from "./components/ThemeSwitch";
import TaskInput from "./components/TaskInput";

function App() {
  const [activeMode, switchTheme] = useThemeSwitch();

  return (
    <ThemeProvider theme={activeMode === "Light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Main>
        <ThemeSwitch mode={activeMode} switchThemeCallback={switchTheme} />
        <TaskInput />
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
`;

const Main = styled.div`
  height: 100vh;
  max-width: 54rem;
  margin: 0 auto;
  padding-top: 7.2rem;
  padding-bottom: 5.2rem;
`;

export default App;
