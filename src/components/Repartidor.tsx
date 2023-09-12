import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import { person } from "ionicons/icons";

interface Props {
  repartidor: {
    repartidorId: number;
    nombre: string;
  };
}

const Repartidor: React.FC<Props> = ({ repartidor }) => {
  return (
    <IonItem>
      <IonIcon slot="start" icon={person}></IonIcon>
      <IonLabel>Repartidor ID: {repartidor.repartidorId}</IonLabel>
      <IonLabel>{repartidor.nombre}</IonLabel>
    </IonItem>
  );
};

export default Repartidor;
