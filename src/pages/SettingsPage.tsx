import {
  IonButton,
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
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { callOutline, medkitOutline, person } from "ionicons/icons";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";

const SettingsPage: React.FC = () => {
  const { user, isLoading, logout } = useUser();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Usuario : {user?.username}</IonCardTitle>
            <IonCardSubtitle>{}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={person}
                ></IonIcon>
                <IonLabel>Nombre: {user?.name}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon
                  slot="start"
                  icon={callOutline}
                ></IonIcon>
                <IonLabel>Teléfono : {user?.cellPhone}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon
                  slot="start"
                  icon={medkitOutline}
                ></IonIcon>
                <IonLabel>Edad: {user?.age}</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonButton
          color="medium"
          expand="block"
          onClick={logout}
        >
          Logout
        </IonButton>
        <IonLoading isOpen={isLoading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
