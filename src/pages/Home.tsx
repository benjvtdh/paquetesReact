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
  IonToggle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";
import Paquete from "../components/Paquete";
import Repartidor from "../components/Repartidor";
import { PaquetesContext } from "../interfaces/paquetes";
import { useContext, useState } from "react";

const Home: React.FC = () => {
  const { paquetesList, repartidoresList } = useContext(PaquetesContext);
  const [ordenarNoEntregados, setOrdenarNoEntrados] = useState(false);

  const paquetes = ordenarNoEntregados
    ? paquetesList.slice().filter((paq) => !paq.enviado)
    : paquetesList;
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
          {paquetes.map((paq) => (
            <Paquete paquete={paq} key={paq.id} />
          ))}
          <IonRow className="ion-justify-content-center">
            <IonCol size="6">
              {/* <IonRouterLink routerLink="/agregar-paquete">
                <IonButton shape="round">Agregar Paquete</IonButton>
              </IonRouterLink> */}
              <IonToggle
                onIonChange={() => setOrdenarNoEntrados((ordenar) => !ordenar)}
              >
                No entregados
              </IonToggle>
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
