import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import { chevronForwardCircle, person } from "ionicons/icons";

interface Props {
  repartidor: {
    repartidorId: number;
    nombre: string;
  };
}

const Repartidor: React.FC<Props> = ({ repartidor }) => {
  return (
    <IonItem button routerLink={`/repartidor/${repartidor.repartidorId}`}>
      <IonIcon slot="start" icon={person}></IonIcon>
      <IonLabel>Repartidor ID: {repartidor.repartidorId}</IonLabel>
      <IonLabel>{repartidor.nombre}</IonLabel>
      <IonIcon icon={chevronForwardCircle} slot="end"></IonIcon>
    </IonItem>
  );
};

export default Repartidor;
