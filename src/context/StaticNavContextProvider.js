import React, { useState, createContext, useContext } from "react";

const StaticNavContext = createContext();

export const StaticNavContextProvider = ({ children }) => {
  const [isNavbarStatic, setIsNavbarStatic] = useState(false);

  return (
    <StaticNavContext.Provider value={{ isNavbarStatic, setIsNavbarStatic }}>
      {children}
    </StaticNavContext.Provider>
  );
};

export const useStaticNavContext = () => useContext(StaticNavContext);
