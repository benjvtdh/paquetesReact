import { firestore } from "../firebase";
import {
  Auth,
  PaqueteInterface,
  RepartidorInterface,
  agregarPaq,
} from "../interfaces/paquetesInterface";
import { PaquetesContext } from "./PaquetesContext";
import { useEffect, useReducer, useState } from "react";

const paquetes: PaqueteInterface[] = [
  { id: 1, objeto: "Ps5 100GB", enviado: false, repartidorId: 2 },
  { id: 2, objeto: "Narnia", enviado: true, repartidorId: 2 },
  { id: 3, objeto: "Iphone X", enviado: true, repartidorId: 4 },
];

const repartidores: RepartidorInterface[] = [
  { repartidorId: 2, nombre: "Benjamin Cortes" },
  { repartidorId: 4, nombre: "Anibaldo Villegas" },
];

const initialState = {
  auth: null,
  isLoading: false,
  paquetesList: [],
  repartidoresList: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "paquetes/loaded":
      return { ...state, isLoading: false, paquetesList: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

interface props {
  children: JSX.Element | JSX.Element[];
  auth: Auth;
}

// Provider for PaquetesContext
export const PaquetesProvider = ({ children, auth }: props) => {
  const [{ isLoading, paquetesList, repartidoresList, error }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchPaquetes() {
      dispatch({ type: "loading" });
      try {
        const paquetesRef = firestore.collection("paquetes");
        const snapshot = await paquetesRef.get();
        const paquetesApi = [];
        snapshot.forEach((doc) => {
          const { enviado, objeto, repartidorId } = doc.data();
          const id = doc.id;
          paquetesApi.push({ id, enviado, objeto, repartidorId });
        });
        dispatch({ type: "paquetes/loaded", payload: paquetesApi });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading paquetes...",
        });
      }
    }
    fetchPaquetes();
  }, []);

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
    // setPaquetesList((paquetes) => [...paquetes, nuevoPaqObj]);
  };

  return (
    <PaquetesContext.Provider
      value={{
        isLoading,
        paquetesList,
        repartidoresList,
        auth,
      }}
    >
      {children}
    </PaquetesContext.Provider>
  );
};
