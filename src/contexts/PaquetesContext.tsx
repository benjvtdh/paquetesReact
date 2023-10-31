import { createContext, useContext, useState } from "react";
import { IPaqueteContext } from "../interfaces/paquetesInterface";

// Creating Context of the entire app : PaquetesContext
export const PaquetesContext = createContext<IPaqueteContext | null>(null);

// Create a CustomHook for using the Context
export function usePaquetes() {
  const context = useContext<IPaqueteContext | null>(PaquetesContext);
  if (context === undefined)
    throw new Error("PaquetesContext fue usado fuera de PaquetesProvider");
  return context;
}
