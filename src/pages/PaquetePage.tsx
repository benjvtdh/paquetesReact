import {
  IonBackButton,
  IonButton,
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
  IonRouterLink,
  IonRow,
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
import { usePaquetes } from "../hooks/usePaquetes";

interface RouteParams {
  id: string;
}

const PaquetePage: React.FC = () => {
  const { paquetesList, repartidoresList, deletePaquete } = usePaquetes();

  const { id } = useParams<RouteParams>();
  const paquete = paquetesList.find((paq) => paq.id === id);
  const repartidor = repartidoresList.find(
    (repartidor) => repartidor.repartidorId === paquete.repartidorId
  );

  const handleBorrar = async () => {
    await deletePaquete(paquete.id);
  };

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
                <IonIcon
                  slot="start"
                  icon={person}
                ></IonIcon>
                <IonLabel>Repartidor: {repartidor.nombre} </IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon
                  slot="start"
                  icon={airplane}
                ></IonIcon>
                <IonLabel>
                  Estado :
                  <IonIcon
                    className={paquete.enviado ? "enviado" : "no-enviado"}
                    icon={paquete.enviado ? checkmarkCircle : closeCircle}
                  ></IonIcon>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon
                  slot="start"
                  icon={calendarNumber}
                ></IonIcon>
                <IonLabel>Fecha de entrega: </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
          <IonRow className="ion-justify-content-center">
            <IonRouterLink routerLink="/">
              <IonButton
                onClick={handleBorrar}
                color="danger"
              >
                Borrar paquete
              </IonButton>
            </IonRouterLink>
          </IonRow>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PaquetePage;
