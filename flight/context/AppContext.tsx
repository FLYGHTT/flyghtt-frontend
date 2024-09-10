"use client";
import { AppContextType } from "@/types";
import React, { useState, createContext, useRef } from "react";
import { ContextMenuType } from "@/types";
import { Column } from "@/types";
import { ModelInputs } from "@/types";
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
