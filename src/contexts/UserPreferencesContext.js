import React, { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    travelerTypes: [],        
    medical: [],
    interests: [],
    accessibility: {
      audioHelp: false,
      contrast: "Default",
    },
    walkRange: "Medium",
  });

  return (
    <UserPreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};