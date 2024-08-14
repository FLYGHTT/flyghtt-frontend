export interface AppContextType {
  clickPosition: { x: number; y: number };
  setClickPosition: (clickPosition: { x: number; y: number }) => void;
}
