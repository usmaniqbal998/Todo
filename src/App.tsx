import React, { useState } from "react";
import useThemeSwitch from "./hooks/useThemeSwitch";
import { lightTheme, darkTheme } from "./styles/themes";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const [activeMode, onModeChanged] = useThemeSwitch();

  return (
    <ThemeProvider theme={activeMode === "Light" ? lightTheme : darkTheme}>
      <div className="App">
        <Text onClick={() => onModeChanged()}>
          Click Me to test dark mode theme switch{" "}
        </Text>
      </div>
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
