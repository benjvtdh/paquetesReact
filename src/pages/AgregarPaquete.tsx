import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
} from "@ionic/react";
import { useState } from "react";

const AgregarPaquete: React.FC = () => {
  const [idPaquete, setIdPaquete] = useState("");
  const [contenido, setContenido] = useState("");
  const nuevoPaquete = { id: idPaquete, objeto: contenido };
  return (
    <IonPage>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>Agregar Paquete</IonLabel>
        </IonListHeader>

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
      </IonList>
    </IonPage>
  );
};

export default AgregarPaquete;
