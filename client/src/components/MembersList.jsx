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
  const [members, setMembers] = useState([]);
  const { isPosting, setIsPosting } = useContext(AppContext);

  // Getting list of members from API

  const getMembers = async () => {
    const response = await fetch("http://localhost:3001/api/crew");
    const data = await response.json();

    const newMembers = data.map((item) => {
      const { name, _id } = item;
      return {
        name: name,
        id: _id,
      };
    });

    setMembers(newMembers);
    setIsPosting(false);
  };

  // Calling API at every change of state (when a new member is added)
  useEffect(() => {
    getMembers();
  }, [isPosting]);

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
