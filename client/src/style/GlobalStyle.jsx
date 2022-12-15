import React from "react";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
body{
    margin: 0; 
    font-family: 'Roboto', sans-serif;
}

h1, h2 {
    text-align: center;
  }

main {
    max-width: 960px;
    margin: 0 auto;
  }
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
