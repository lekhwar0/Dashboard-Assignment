import React, { useState, createContext, useContext } from "react";

const SideNavLightContext = createContext();

export const SideNavLightContextProvider = ({ children }) => {
  const [isSideNavLight, setIsSideNavLight] = useState(false);

  return (
    <SideNavLightContext.Provider value={{ isSideNavLight, setIsSideNavLight }}>
      {children}
    </SideNavLightContext.Provider>
  );
};

export const useSideNavLightContext = () => useContext(SideNavLightContext);
