"use client";
import { AppContextType } from "@/types";
import React, { useState, createContext, useRef } from "react";
import { ContextMenuType } from "@/types";
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [contextMenu, setContextMenu] = useState<ContextMenuType>({
    visible: false,
    x: 0,
    y: 0,
  });
  const [businessId, setBusinessId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log("openModal", openModal);
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        contextMenu,
        setContextMenu,
        businessId,
        setBusinessId,
        modalRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
