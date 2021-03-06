import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mode: "light",
  bodyBackgroundColor: "#FAFAFA",
  bannerGradient: "linear-gradient(225deg, #5596FF 0%, #AC2DEB 100%)",
  componentBackgroundColor: "#fff",
  textColor: "#494C6B",
  componentsBoxShadow: "0rem 3.5rem 5rem -1.5rem rgba(194, 195, 214, 0.5)",
  borderColor: "#E3E4F1",
  completedText: "#D1D2DA",
  flatBtnColor: "#9495A5",
  flatBtnHoverColor: "#494C6B",
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  bodyBackgroundColor: "#171823",
  bannerGradient: "linear-gradient(135deg, #3710BD 0%, #A42395 100%)",
  componentBackgroundColor: "#25273D",
  textColor: "#C8CBE7",
  componentsBoxShadow: "0px 3.5rem 5rem -1.5rem rgba(0, 0, 0, 0.5)",
  borderColor: "#393A4B",
  completedText: "#4D5067",
  flatBtnColor: "#9495A5",
  flatBtnHoverColor: "#E3E4F1",
};
