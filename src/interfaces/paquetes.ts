import { createContext } from "react";

export const PaquetesContext = createContext({
  paquetesList: [
    { id: 1, objeto: "Ps5 100GB", enviado: false, repartidorId: 2 },
    { id: 2, objeto: "Narnia", enviado: true, repartidorId: 2 },
    { id: 3, objeto: "Iphone X", enviado: true, repartidorId: 4 },
  ],
  repartidoresList: [
    { repartidorId: 2, nombre: "Benjamin Cortes" },
    { repartidorId: 4, nombre: "Anibaldo Villegas" },
  ],
});
