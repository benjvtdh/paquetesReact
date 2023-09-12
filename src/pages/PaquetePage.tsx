import {
  IonAvatar,
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
import { useContext } from "react";
import { useParams } from "react-router";
import { PaquetesContext } from "../interfaces/paquetes";
import {
  airplane,
  calendarNumber,
  checkmarkCircle,
  closeCircle,
  person,
} from "ionicons/icons";

interface RouteParams {
  id: string;
}

const PaquetePage: React.FC = () => {
  const { paquetesList } = useContext(PaquetesContext);
  const { id } = useParams<RouteParams>();
  const paquete = paquetesList.find((paq) => paq.id === Number(id));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
                <IonLabel>Encargado: </IonLabel>
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
