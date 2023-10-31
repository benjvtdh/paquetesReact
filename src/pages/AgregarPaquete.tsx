import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

import { agregarPaq } from "../interfaces/paquetesInterface";
import { usePaquetes } from "../contexts/PaquetesContext";

const AgregarPaquete: React.FC = () => {
  const [idPaquete, setIdPaquete] = useState("");
  const [contenido, setContenido] = useState("");
  const [idRepartidor, setIdRepartidor] = useState("");
  const { repartidoresList, agregarPaquete } = usePaquetes();

  function handleAgregarSetear() {
    agregarPaquete(Number(idPaquete), contenido, Number(idRepartidor));
    setIdPaquete("");
    setContenido("");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Agregar Paquete</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonInput
              type="number"
              label="ID Paquete"
              placeholder="Ingrese ID. Sólo numeros"
              value={idPaquete}
              onIonChange={(e) => setIdPaquete(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Contenido"
              placeholder="Ingrese contenido"
              value={contenido}
              onIonChange={(e) => setContenido(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonSelect
              label="Repartidor"
              placeholder="Seleccione Repartidor"
              value={idRepartidor}
              onIonChange={(e) => setIdRepartidor(e.detail.value)}
            >
              {repartidoresList.map((repartidor) => (
                <IonSelectOption
                  key={repartidor.repartidorId}
                  value={repartidor.repartidorId}
                >
                  {repartidor.nombre}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          <IonRouterLink routerLink="/home">
            <IonButton onClick={() => handleAgregarSetear()} shape="round">
              Agregar Paquete
            </IonButton>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AgregarPaquete;
