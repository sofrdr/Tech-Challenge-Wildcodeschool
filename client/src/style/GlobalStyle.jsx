import React from "react";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
body, html{
    margin: 0; 
    font-family: 'Roboto', sans-serif;
    height: 100%;
}

h1, h2 {
    text-align: center;
  }

main {
    max-width: 960px;
    margin: 0 auto;
    height: 100%;
  }


`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
