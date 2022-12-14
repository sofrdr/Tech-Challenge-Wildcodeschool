import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #f4f4f4;
  text-align: center;
  padding: 2em;
`;

const HeaderImg = styled.img`
  max-width: 96px;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5em;
  font-weight: 500;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <HeaderImg
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />
        Les Argonautes
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
