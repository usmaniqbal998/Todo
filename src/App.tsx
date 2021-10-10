import React, { useState } from "react";
import useThemeSwitch from "./hooks/useThemeSwitch";
import { lightTheme, darkTheme } from "./styles/themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalstyles";

function App() {
  const [activeMode, onModeChanged] = useThemeSwitch();

  return (
    <ThemeProvider theme={activeMode === "Light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App"></div>
    </ThemeProvider>
  );
}

const Text = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 25px;
  transition: color 0.3s;
  transition-timing-function: ease-out;
`;

export default App;
