import {
  Auth,
  PaqueteInterface,
  RepartidorInterface,
  agregarPaq,
} from "../interfaces/paquetesInterface";
import { PaquetesContext } from "./PaquetesContext";
import { useState } from "react";

const paquetes: PaqueteInterface[] = [
  { id: 1, objeto: "Ps5 100GB", enviado: false, repartidorId: 2 },
  { id: 2, objeto: "Narnia", enviado: true, repartidorId: 2 },
  { id: 3, objeto: "Iphone X", enviado: true, repartidorId: 4 },
];

const repartidores: RepartidorInterface[] = [
  { repartidorId: 2, nombre: "Benjamin Cortes" },
  { repartidorId: 4, nombre: "Anibaldo Villegas" },
];

interface props {
  children: JSX.Element | JSX.Element[];
  auth: Auth;
}

// Provider for PaquetesContext
export const PaquetesProvider = ({ children, auth }: props) => {
  const [paquetesList, setPaquetesList] = useState([]);
  const [repartidoresList, setRepartidoresList] = useState([]);

  // Function for add a Paquete
  const agregarPaquete: agregarPaq = function (
    idPaquete,
    objetoPaquete,
    idRepartidor
  ) {
    const nuevoPaqObj = {
      id: Number(idPaquete),
      objeto: objetoPaquete,
      enviado: false,
      repartidorId: idRepartidor,
    };
    setPaquetesList((paquetes) => [...paquetes, nuevoPaqObj]);
  };

  return (
    <PaquetesContext.Provider
      value={{
        paquetesList,
        repartidoresList,
        agregarPaquete,
        auth,
      }}
    >
      {children}
    </PaquetesContext.Provider>
  );
};
