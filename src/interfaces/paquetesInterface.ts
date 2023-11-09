export interface PaqueteInterface {
  id: number;
  objeto: string;
  enviado: boolean;
  repartidorId: number;
}
export interface RepartidorInterface {
  repartidorId: number;
  nombre: string;
}
export interface IPaqueteContext {
  isLoading: boolean;
  auth: Auth;
  paquetesList: PaqueteInterface[];
  repartidoresList: RepartidorInterface[];
}

export type agregarPaq = (
  idPaquete: number,
  objetoPaquete: string,
  idRepartidor: number
) => void;

export interface Auth {
  loggedIn: boolean;
  userId?: string;
}

export interface AuthInit {
  loading: boolean;
  auth?: Auth;
}

export interface User {
  username: string;
  name: string;
  age: number;
  cellPhone: string;
}
