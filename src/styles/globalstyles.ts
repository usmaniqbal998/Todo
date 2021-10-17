import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,*::after,*::before{
       margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
}
html{
    font-size: 62.5%;

}
body{
font-family: 'Josefin Sans', sans-serif;
font-size:1.4rem;
background-color: ${(props) => props.theme.bodyBackgroundColor};
transition:  background-color 0.3s ease-in;
}
`;
