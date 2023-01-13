import { React, createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

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
  };

  // Calling API at every change of state (when a new member is added)
  useEffect(() => {
    getMembers();
  }, [members]);

  return (
    <AppContext.Provider value={{ members, setMembers }}>
      {children}
    </AppContext.Provider>
  );
};
