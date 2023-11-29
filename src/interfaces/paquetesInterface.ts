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
