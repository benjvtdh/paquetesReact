import {
  IonButton,
  IonCol,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
  IonRow,
} from "@ionic/react";

import "./Home.css";
import Paquete from "../components/Paquete";

const Home: React.FC = ({ paquetes }) => {
  return (
    <IonPage>
      <IonList>
        <IonListHeader color="dark">
          <IonLabel>Listado de Paquetes</IonLabel>
        </IonListHeader>
        {paquetes.map((paq) => (
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
    </IonPage>
  );
};

export default Home;
