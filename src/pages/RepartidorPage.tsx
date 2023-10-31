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
import { usePaquetes } from "../hooks/usePaquetes";
import { checkmarkCircle, closeCircle, logoDropbox } from "ionicons/icons";

interface RouteParams {
  repartidorId: string;
}
const RepartidorPage: React.FC = () => {
  const { paquetesList, repartidoresList } = usePaquetes();
  const { repartidorId } = useParams<RouteParams>();
  const repartidor = repartidoresList.find(
    (repartidor) => repartidor.repartidorId === Number(repartidorId)
  );

  const paquetesRepartidor = paquetesList.filter(
    (paq) => paq.repartidorId === Number(repartidorId)
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Ver Repartidor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Repartidor : {repartidorId}</IonCardTitle>
            <IonCardSubtitle>{repartidor.nombre}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {paquetesRepartidor.map((paq) => (
                <IonItem key={paq.objeto}>
                  <IonIcon slot="start" icon={logoDropbox}></IonIcon>
                  <IonLabel>ID: {paq.id}</IonLabel>
                  <IonLabel>{paq.objeto}</IonLabel>
                  <IonLabel>
                    <b>Estado: </b>
                    <IonIcon
                      className={paq.enviado ? "enviado" : "no-enviado"}
                      icon={paq.enviado ? checkmarkCircle : closeCircle}
                    ></IonIcon>
                  </IonLabel>
                </IonItem>
              ))}
              {/* <IonItem>
                <IonIcon slot="start" icon={person}></IonIcon>
                <IonLabel>Repartidor: {repartidor.nombre} </IonLabel>
              </IonItem> */}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RepartidorPage;
