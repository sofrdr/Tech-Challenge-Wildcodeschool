import { React, createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isPosting, setIsPosting] = useState(false);

  return (
    <AppContext.Provider value={{ isPosting, setIsPosting }}>
      {children}
    </AppContext.Provider>
  );
};
