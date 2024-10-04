import React from "react";

export interface AppContextType {
  contextMenu: ContextMenuType;
  setContextMenu: React.Dispatch<React.SetStateAction<ContextMenuType>>;
  businessId: number | null;
  setBusinessId: React.Dispatch<React.SetStateAction<number | null>>;
  tool: Tool;
  setTool: React.Dispatch<React.SetStateAction<Tool>>;
  toolColumns: Column[];
  setToolColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  modelHeaderRef: React.MutableRefObject<null>;
  modelSnapshot: string | null;
  setModelSnapshot: React.Dispatch<React.SetStateAction<string | null>>;
  tabs: Tab[];
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>;
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}

export interface DisplayedModel {
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
  role: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}
export interface Business {
  businessId: string;
  businessName: string;
  description: string;
  numberOfEmployees: number;
  createdAt: Date;
  numberOfBusinessTools: number;
  businessLogoImageData: string;
}

export interface User {
  userId: string;
  emailVerified: boolean;
  enabled: boolean;
  role: string;
  token?: string;
}
export interface LoggedInUser {
  userId: string;
  emailVerified: boolean;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Tool {
  toolId: string;
  name: string;
  description: string;
  link: string;
  commentable: boolean;
  columns: string;
  public: boolean;
  createdAt: Date;
}
export interface Column {
  name: string;
  description: string;
  factors: Factor[];
}
export interface Factor {
  name: string;
  value: string;
}

export interface ConvertedTool {
  toolId: string;
  name: string;
  description: string;
  link: string;
  commentable: boolean;
  columns: Column[];
  public: boolean;
  createdAt: Date;
}

export interface Tab {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  tabTool: Tool;
  mode: string;
}
