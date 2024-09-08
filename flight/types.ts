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
export interface Item {
  id: number;
  title: string;
}
export interface Column {
  id: number;
  heading: string;
  description: string;
  items: Item[];
}
export interface ModelInputs {
  id: number;
  modelName: string;
  modelDescription: string;
  externalReferences: string[];
}

export interface Model {
  id: number;
  modelName: string;
  modelDescription: string;
  externalReferences: string[];
  columns: Column[];
}
