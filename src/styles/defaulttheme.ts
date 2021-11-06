// import original module declarations
import "styled-components";
// and extend them!

declare module "styled-components" {
  export interface DefaultTheme {
    bodyBackgroundColor: string;
    bannerGradient: string;
    componentBackgroundColor: string;
    textColor: string;
    mode: string;
    componentsBoxShadow: string;
    borderColor: string;
    completedText: string;
    flatBtnColor: string;
    flatBtnHoverColor: string;
  }
}
