import React from "react";

export interface AppContextType {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  contextMenu: ContextMenuType;
  setContextMenu: React.Dispatch<React.SetStateAction<ContextMenuType>>;
  businessId: number | null;
  setBusinessId: React.Dispatch<React.SetStateAction<number | null>>;
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

export interface SignUpInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  remember: boolean;
  newsletter: boolean;
}
