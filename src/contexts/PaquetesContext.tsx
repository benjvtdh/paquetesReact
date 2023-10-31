import { createContext, useContext, useState } from "react";
import { IPaqueteContext } from "../interfaces/paquetesInterface";

export const PaquetesContext = createContext<IPaqueteContext | null>(null);

export function usePaquetes() {
  const context = useContext<IPaqueteContext | null>(PaquetesContext);
  if (context === undefined)
    throw new Error("PaquetesContext fue usado fuera de PaquetesProvider");
  return context;
}
