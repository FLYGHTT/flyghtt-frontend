"use client";
import { AppContextType } from "@/types";
import React, { useState, createContext, useContext} from "react";

const Context = createContext<AppContextType | undefined>(undefined);

export const AppContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  return (
    <Context.Provider
      value={{
        clickPosition,
        setClickPosition,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
