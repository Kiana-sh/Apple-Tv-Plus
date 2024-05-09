import { createGlobalStyle } from "styled-components";
import { ColorPallete } from "./PrimaryStyle";

export const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: ${ColorPallete.BackgroundColor};
    color: ${ColorPallete.PrimaryText};
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: 400;
}
a {
    text-decoration: none;
    color: #fff;
}
ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
`
export default GlobalStyle; 