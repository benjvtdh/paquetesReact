import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import {
  cubeOutline,
  chevronForwardCircle,
  checkmarkCircle,
  closeCircle,
} from "ionicons/icons";

import "../components/Paquete.css";
interface Props {
  paquete: {
    id: number;
    objeto: string;
    enviado: boolean;
  };
}

const Paquete: React.FC<Props> = ({ paquete }) => {
  return (
    <IonItem button routerLink={`/paquete/${paquete.id}`}>
      <IonIcon icon={cubeOutline} slot="start"></IonIcon>
      <IonLabel>ID: {paquete.id}</IonLabel>
      <IonLabel>{paquete.objeto}</IonLabel>
      <IonLabel>
        <b>Estado: </b>
        <IonIcon
          className={paquete.enviado ? "enviado" : "no-enviado"}
          icon={paquete.enviado ? checkmarkCircle : closeCircle}
        ></IonIcon>
      </IonLabel>
      <IonIcon icon={chevronForwardCircle} slot="end"></IonIcon>
    </IonItem>
  );
};

export default Paquete;
