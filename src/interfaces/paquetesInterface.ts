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
  paquetesList: PaqueteInterface[];
  repartidoresList: RepartidorInterface[];
  agregarPaquete: agregarPaq;
}

export type agregarPaq = (
  idPaquete: number,
  objetoPaquete: string,
  idRepartidor: number
) => void;
