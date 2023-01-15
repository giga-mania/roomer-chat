import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.bg};
    padding: 0;
    margin: 0;
    transition: background-color 1.2s ease;
  }
`;

export default GlobalStyles