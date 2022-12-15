import { React, useState } from "react";
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

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const createNewMember = async () => {};

  return (
    <div>
      <h2>Ajouter un(e) Argonaute</h2>
      <NewMemberForm>
        <FormLabel htmlFor="name">Nom de l'argonaute</FormLabel>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          onChange={handleChange}
        />
        <button type="submit">Envoyer</button>
      </NewMemberForm>
    </div>
  );
};

export default Form;
