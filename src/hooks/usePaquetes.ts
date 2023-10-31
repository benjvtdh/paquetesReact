import { useContext } from "react";
import { IPaqueteContext } from "../interfaces/paquetesInterface";
import { PaquetesContext } from "../contexts/PaquetesContext";

// Create a CustomHook for using the Context

export function usePaquetes() {
  const context = useContext<IPaqueteContext | null>(PaquetesContext);
  if (context === undefined)
    throw new Error("PaquetesContext fue usado fuera de PaquetesProvider");
  return context;
}
