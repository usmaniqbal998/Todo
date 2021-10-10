interface theme {
  bodyBackgroundColor: string;
  bannerGradient: string;
  componentBackgroundColor: string;
  textColor: string;
}

export const lightTheme: theme = {
  bodyBackgroundColor: "#FAFAFA",
  bannerGradient: "linear-gradient(225deg, #5596FF 0%, #AC2DEB 100%)",
  componentBackgroundColor: "#fff",
  textColor: "#494C6B",
};

export const darkTheme: theme = {
  bodyBackgroundColor: "#171823",
  bannerGradient: "linear-gradient(135deg, #3710BD 0%, #A42395 100%)",
  componentBackgroundColor: "#25273D",
  textColor: "#C8CBE7",
};
