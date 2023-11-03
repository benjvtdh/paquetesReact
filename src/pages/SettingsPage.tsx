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
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { authUser } from "../firebase";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import { usePaquetes } from "../hooks/usePaquetes";
import { callOutline, person } from "ionicons/icons";
import { User } from "../interfaces/paquetesInterface";

const SettingsPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User>();

  const { auth } = usePaquetes();
  useEffect(() => {
    const usersRef = firestore.collection("users").doc(auth.userId);
    usersRef.get().then((snapshot) => {
      setUserInfo(snapshot.data() as User);
    });
  }, []);

  console.log(userInfo);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Usuario : {userInfo?.username}</IonCardTitle>
            <IonCardSubtitle>{}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon slot="start" icon={person}></IonIcon>
                <IonLabel>
                  Nombre: {userInfo?.name} {userInfo?.last_name}
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon slot="start" icon={callOutline}></IonIcon>
                <IonLabel>
                  Número de teléfono : {userInfo?.cell_number}
                </IonLabel>
              </IonItem>

              <IonItem>
                {/* <IonIcon slot="start" icon={calendarNumber}></IonIcon> */}
                <IonLabel>Edad: {userInfo?.age}</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonButton
          color="medium"
          expand="block"
          onClick={() => authUser.signOut()}
        >
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
