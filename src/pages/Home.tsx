import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";
import Paquete from "../components/Paquete";
import Repartidor from "../components/Repartidor";
import { PaquetesContext } from "../interfaces/paquetes";
import { useContext } from "react";

const Home: React.FC = () => {
  const { paquetesList, repartidoresList } = useContext(PaquetesContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Listado de Paquetes</IonLabel>
          </IonListHeader>
          {paquetesList.map((paq) => (
            <Paquete paquete={paq} key={paq.id} />
          ))}
          <IonRow>
            <IonCol className="ion-text-center">
              <IonRouterLink routerLink="/agregar-paquete">
                <IonButton shape="round">Agregar Paquete</IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonListHeader>Repartidores</IonListHeader>
          {repartidoresList.map((repartidor) => (
            <Repartidor key={repartidor.repartidorId} repartidor={repartidor} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
