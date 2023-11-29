import { firestore } from "../firebase";
import {
  PaqueteInterface,
  RepartidorInterface,
} from "../interfaces/paquetesInterface";
import { PaquetesContext } from "./PaquetesContext";
import { useEffect, useReducer } from "react";
import { agregarPaq } from "../interfaces/paquetesInterface";

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
    case "repartidores/loaded":
      return { ...state, isLoading: false, repartidoresList: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

// Provider for PaquetesContext
export const PaquetesProvider = ({ children }) => {
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
          paquetesApi.push({
            id,
            enviado,
            objeto,
            repartidorId,
          } as PaqueteInterface);
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

  useEffect(() => {
    async function fetchRepartidores() {
      dispatch({ type: "loading" });
      try {
        const repartidoresRef = firestore.collection("repartidores");
        const snapshot = await repartidoresRef.get();
        const repartidoresApi = [];
        snapshot.forEach((doc) => {
          const { nombre } = doc.data();
          const repartidorId = Number(doc.id);
          repartidoresApi.push({
            repartidorId,
            nombre,
          } as RepartidorInterface);
        });

        dispatch({ type: "repartidores/loaded", payload: repartidoresApi });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading paquetes...",
        });
      }
    }
    fetchRepartidores();
  }, []);

  // Function for add a Paquete
  const agregarPaquete: agregarPaq = async function (objeto, repartidorId) {
    dispatch({ type: "loading" });
    try {
      const res = await firestore
        .collection("paquetes")
        .add({ objeto, enviado: false, repartidorId });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was an error loading paquetes...",
      });
    }
  };

  return (
    <PaquetesContext.Provider
      value={{
        error,
        isLoading,
        paquetesList,
        repartidoresList,
        agregarPaquete,
      }}
    >
      {children}
    </PaquetesContext.Provider>
  );
};
