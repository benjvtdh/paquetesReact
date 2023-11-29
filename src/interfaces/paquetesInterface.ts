export interface PaqueteInterface {
  id: string;
  objeto: string;
  enviado: boolean;
  repartidorId: number;
}
export interface RepartidorInterface {
  repartidorId: number;
  nombre: string;
}
export interface IPaqueteContext {
  error: string;
  isLoading: boolean;

  paquetesList: PaqueteInterface[];
  repartidoresList: RepartidorInterface[];
  agregarPaquete: agregarPaq;
}

export type agregarPaq = (objetoPaquete: string, idRepartidor: number) => void;

// export interface Auth {
//   loggedIn: boolean;
//   userId?: string;
// }

// export interface AuthInit {
//   loading: boolean;
//   auth?: Auth;
// }

// export interface User {
//   username: string;
//   name: string;
//   age: number;
//   cellPhone: string;
// }
