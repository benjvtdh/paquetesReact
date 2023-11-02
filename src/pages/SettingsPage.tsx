import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { authUser } from "../firebase";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import { usePaquetes } from "../hooks/usePaquetes";

const SettingsPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  const { auth } = usePaquetes();
  useEffect(() => {
    const usersRef = firestore.collection("users").doc(auth.userId);
    usersRef.get().then((snapshot) => {
      setUserInfo(snapshot.data());
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
