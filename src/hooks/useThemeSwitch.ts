import React from "react";

const useThemeSwitch = () => {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "Light";
  });

  React.useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const changeModeHandler = () => {
    mode === "Light" ? setMode("Dark") : setMode("Light");
  };

  return [mode, changeModeHandler] as const;
};

export default useThemeSwitch;
