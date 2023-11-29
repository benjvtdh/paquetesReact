import { createContext } from "react";
import { IPaqueteContext } from "../interfaces/paquetesInterface";
// Creating Context of the entire app : PaquetesContext
export const PaquetesContext = createContext<IPaqueteContext | null>(null);
