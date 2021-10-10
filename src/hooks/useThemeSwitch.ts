import * as React from "react";

type themeOptions = "Light" | "Dark";
const useThemeSwitch = () => {
  const [mode, setMode] = React.useState("Light" as themeOptions);

  const changeModeHandler = () => {
    mode === "Light" ? setMode("Dark") : setMode("Light");
    return;
  };
  return [mode, changeModeHandler] as const;
};

export default useThemeSwitch;
