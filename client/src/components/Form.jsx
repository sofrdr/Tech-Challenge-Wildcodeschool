import { React, useContext, useState } from "react";
import { AppContext } from "../utils/context";
import styled from "styled-components";

const NewMemberForm = styled.form`
  margin: 2em 0 4em 0;
  text-align: center;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5em;
`;

const Form = () => {
  const [name, setName] = useState("");
  const { members, setMembers } = useContext(AppContext);

  // Changing the state when user is typing
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Function to add a new member to database
  const createNewMember = async ({ name }) => {
    try {
      const response = await fetch("http://localhost:3001/api/crew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      console.log(data);
      const { newMember } = data;
      return newMember;
    } catch (error) {
      console.log(error);
    }
  };

  // On submit data is send to the database and form's field is reinitialized
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = createNewMember({ name });
    const newData = members;
    newData.push(newMember.name);
    setMembers(newData);
    setName("");
  };

  return (
    <section>
      <h2>Ajouter un(e) Argonaute</h2>
      <NewMemberForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Nom de l'argonaute</FormLabel>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </NewMemberForm>
    </section>
  );
};

export default Form;
