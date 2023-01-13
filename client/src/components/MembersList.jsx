import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/context";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ListItem = styled.div`
  width: 33%;
  text-align: center;
  padding: 0.25em 0;
`;

const MembersList = () => {
  const { members } = useContext(AppContext);

  return (
    <section>
      <h2>Membres de l'équipage</h2>
      <ListContainer>
        {members.map((item) => {
          return <ListItem key={item.id}>{item.name}</ListItem>;
        })}
      </ListContainer>
    </section>
  );
};

export default MembersList;
