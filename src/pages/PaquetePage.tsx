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

import { airplane, logoDropbox, person } from "ionicons/icons";
import { usePaquetes } from "../hooks/usePaquetes";
import { useState } from "react";

interface RouteParams {
  id: string;
}

const PaquetePage: React.FC = () => {
  const { paquetesList, deletePaquete, repartidoresList, updatePaquete } =
    usePaquetes();

  const { id } = useParams<RouteParams>();
  const paquete = paquetesList.find((paq) => paq.id === id);

  const handleBorrar = async () => {
    await deletePaquete(paquete.id);
  };

  const handleUpdate = async () => {
    const editedPaquete = { id, objeto, enviado, repartidorId };
    await updatePaquete(editedPaquete);
  };

  const [objeto, setObjeto] = useState(paquete.objeto);
  const [repartidorId, setRepartidorId] = useState(paquete.repartidorId);
  const [enviado, setEnviado] = useState(paquete.enviado);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
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
                  <IonInput
                    label="Objeto:"
                    value={objeto}
                    onIonInput={(e) => {
                      setObjeto(e.detail.value);
                    }}
                  ></IonInput>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={person}
                ></IonIcon>
                <IonLabel>
                  <IonSelect
                    label="Repartidor:"
                    value={repartidorId}
                    onIonChange={(e) => setRepartidorId(Number(e.detail.value))}
                  >
                    {repartidoresList.map((repartidor) => (
                      <IonSelectOption
                        key={repartidor.repartidorId}
                        value={repartidor.repartidorId}
                      >
                        {repartidor.nombre}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonLabel>
              </IonItem>

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
                    <IonSelectOption value={true}>Enviado</IonSelectOption>
                    <IonSelectOption value={false}>No enviado</IonSelectOption>
                  </IonSelect>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
          <IonRow className="ion-justify-content-center">
            <IonRouterLink routerLink="/">
              <IonButton
                onClick={handleUpdate}
                color="primary"
              >
                Editar paquete
              </IonButton>
            </IonRouterLink>

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
