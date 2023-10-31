import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useParams } from "react-router";

import {
  airplane,
  calendarNumber,
  checkmarkCircle,
  closeCircle,
  person,
} from "ionicons/icons";
import { usePaquetes } from "../contexts/PaquetesContext";

interface RouteParams {
  id: string;
}

const PaquetePage: React.FC = () => {
  const { paquetesList, repartidoresList } = usePaquetes();
  const { id } = useParams<RouteParams>();
  const paquete = paquetesList.find((paq) => paq.id === Number(id));
  const repartidor = repartidoresList.find(
    (repartidor) => repartidor.repartidorId === paquete.repartidorId
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Ver Paquete</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Paquete : {paquete.id}</IonCardTitle>
            <IonCardSubtitle>{paquete.objeto}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={person}></IonIcon>
                <IonLabel>Repartidor: {repartidor.nombre} </IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon slot="start" icon={airplane}></IonIcon>
                <IonLabel>
                  Estado :
                  <IonIcon
                    className={paquete.enviado ? "enviado" : "no-enviado"}
                    icon={paquete.enviado ? checkmarkCircle : closeCircle}
                  ></IonIcon>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon slot="start" icon={calendarNumber}></IonIcon>
                <IonLabel>Fecha de entrega: </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PaquetePage;
