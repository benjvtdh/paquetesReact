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
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

import { usePaquetes } from "../hooks/usePaquetes";

const AgregarPaquete: React.FC = () => {
  const [contenido, setContenido] = useState("");
  const [idRepartidor, setIdRepartidor] = useState("");
  const { repartidoresList, agregarPaquete } = usePaquetes();

  const handleAgregarSetear = async () => {
    await agregarPaquete(contenido, Number(idRepartidor));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Agregar Paquete</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonInput
              label="Contenido"
              placeholder="Ingrese contenido"
              value={contenido}
              onIonInput={(e) => {
                setContenido(e.detail.value);
              }}
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
          <IonRow className="ion-justify-content-center">
            <IonRouterLink routerLink="/">
              <IonButton
                onClick={() => handleAgregarSetear()}
                shape="round"
              >
                Agregar Paquete
              </IonButton>
            </IonRouterLink>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AgregarPaquete;
