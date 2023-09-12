import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

const AgregarPaquete: React.FC = ({ onAgregar }) => {
  const [idPaquete, setIdPaquete] = useState("");
  const [contenido, setContenido] = useState("");
  const nuevoPaquete = { id: idPaquete, objeto: contenido };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
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

          <IonRouterLink routerLink="/home">
            <IonButton shape="round">Devolverse</IonButton>
          </IonRouterLink>
          <IonRouterLink routerLink="/home">
            <IonButton onClick={() => onAgregar(nuevoPaquete)} shape="round">
              Agregar Paquete
            </IonButton>
          </IonRouterLink>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AgregarPaquete;
