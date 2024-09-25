"use client";

import React, { useState, createContext, useRef } from "react";
import { ContextMenuType, AppContextType, Tool } from "@/types";
import { newTool } from "@/lib/constants";
import { convertToolColumnsToArray } from "@/lib/convertToolColumns";
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
  const [tool, setTool] = useState<Tool>(newTool);
  const modelHeaderRef = useRef(null);
  const [toolColumns, setToolColumns] = useState(
    convertToolColumnsToArray(tool.columns)
  );
  const [modelSnapshot, setModelSnapshot] = useState<string | null>(null);
  return (
    <AppContext.Provider
      value={{
        toolColumns,
        setToolColumns,
        tool,
        setTool,
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
