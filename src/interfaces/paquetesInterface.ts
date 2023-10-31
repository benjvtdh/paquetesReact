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
  loggedIn: boolean;
  paquetesList: PaqueteInterface[];
  repartidoresList: RepartidorInterface[];
  agregarPaquete: agregarPaq;
  onLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export type agregarPaq = (
  idPaquete: number,
  objetoPaquete: string,
  idRepartidor: number
) => void;
