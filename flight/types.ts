import React from "react";

export interface AppContextType {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Model {
  id: number;
  name: string;
  status: string;
  modified: string;
  isPinned: boolean;
  isFavorite: boolean;
}