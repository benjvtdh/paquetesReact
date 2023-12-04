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
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useParams } from "react-router";

import {
  airplane,
  calendarNumber,
  checkmarkCircle,
  closeCircle,
  logoDropbox,
  person,
} from "ionicons/icons";
import { usePaquetes } from "../hooks/usePaquetes";
import { useState } from "react";

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

  // const [objeto, setObjeto] = useState(paquete.objeto);
  // const [repartidorId, setRepartidorId] = useState(paquete.repartidorId);
  // const [enviado, setEnviado] = useState(paquete.enviado);

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
            {/* <IonCardSubtitle>{paquete.objeto}</IonCardSubtitle> */}
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={logoDropbox}
                ></IonIcon>
                <IonLabel>
                  {/* <IonInput
                    label="Objeto:"
                    value={objeto}
                    onIonInput={(e) => {
                      setObjeto(e.detail.value);
                    }}
                  ></IonInput> */}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={person}
                ></IonIcon>
                <IonLabel>Repartidor: {repartidor.nombre} </IonLabel>
              </IonItem>
              {/* 
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={airplane}
                ></IonIcon>
                <IonLabel>
                  <IonSelect
                    label="Enviado:"
                    value={enviado}
                    onIonChange={(e) => setEnviado(e.detail.value)}
                  >
                    <IonSelectOption value={true}>
                      <IonIcon
                        className={"enviado"}
                        icon={checkmarkCircle}
                      ></IonIcon>
                    </IonSelectOption>
                    <IonSelectOption value={false}>
                      <IonIcon
                        className={"no-enviado"}
                        icon={closeCircle}
                      ></IonIcon>
                    </IonSelectOption>
                  </IonSelect>
                </IonLabel>
              </IonItem> */}

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
