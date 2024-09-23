"use client";

import React, { useState, createContext, useRef } from "react";
import { ModelInputs, ContextMenuType, Column, AppContextType } from "@/types";

import { newmodelInputs } from "@/lib/constants";
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

  const [columns, setColumns] = useState<Column[]>([]);
  const [modelInputs, setModelInputs] = useState<ModelInputs>(newmodelInputs);
  const modelHeaderRef = useRef(null);
  const [modelSnapshot, setModelSnapshot] = useState<string | null>(null);
  return (
    <AppContext.Provider
      value={{
        columns,
        setColumns,
        modelInputs,
        setModelInputs,
        contextMenu,
        setContextMenu,
        businessId,
        setBusinessId,
        modelHeaderRef,
        modelSnapshot,
        setModelSnapshot,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
