"use client";
import { AppContextType } from "@/types";
import React, { useState, createContext } from "react";
import { ContextMenuType } from "@/types";
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [activePage, setActivePage] = useState("home");
  const [contextMenu, setContextMenu] = useState<ContextMenuType>({
    visible: false,
    x: 0,
    y: 0,
  });
  const [businessId, setBusinessId] = useState<number | null>(null);
  
  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        contextMenu,
        setContextMenu,
        businessId,
        setBusinessId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
