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
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
