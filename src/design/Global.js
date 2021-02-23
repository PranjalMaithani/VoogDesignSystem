import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "MetropolisRegular";
    src: url("/assets/fonts/Metropolis-Regular.otf");
}
@font-face {
    font-family: "MetropolisMedium";
    src: url("/assets/fonts/Metropolis-Medium.otf");
}
@font-face {
    font-family: "MetropolisBold";
    src: url("/assets/fonts/Metropolis-Bold.otf");
}
@font-face {
    font-family: "SourceCodePro";
    src: url("/assets/fonts/SourceCodePro-Regular.ttf");
}

html {
    font-size: 16px;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: "MetropolisRegular", sans-serif;
    font-size: 18px;
}

main {
    width: 90%;
    margin: 0 auto;
}
`;
