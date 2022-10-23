import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: #eee;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
    word-break: break-word;
  }
`;