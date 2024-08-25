import React from "react";

export interface AppContextType {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  contextMenu: ContextMenuType;
  setContextMenu: React.Dispatch<React.SetStateAction<ContextMenuType>>;
}

export interface Model {
  id: number;
  name: string;
  status: string;
  modified: string;
  isPinned: boolean;
  isFavorite: boolean;
}
export interface ContextMenuType {
  visible: boolean;
  x: number;
  y: number;
}

