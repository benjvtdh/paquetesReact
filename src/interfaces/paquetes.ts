import { createContext } from "react";

export const PaquetesContext = createContext({
  paquetesList: [
    { id: 1, objeto: "Ps5 100GB", enviado: false },
    { id: 2, objeto: "Narnia", enviado: true },
    { id: 3, objeto: "Iphone X", enviado: true },
  ],
});
