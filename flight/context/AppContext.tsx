"use client";
import { AppContextType } from "@/types";
import React, { useState, createContext, useContext } from "react";

const Context = createContext<AppContextType | undefined>(undefined);

export const AppContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Context.Provider
      value={{
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
