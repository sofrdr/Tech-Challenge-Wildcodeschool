import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 2em;
  text-align: center;
  color: #fff;
  background: #f76c6c;
  padding: 0.25em 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
    </StyledFooter>
  );
};

export default Footer;
