import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { auth } from "../firebase";

const handleLogin = async () => {
  const credential = await auth.signInWithEmailAndPassword(
    "ben.cortesm@duocuc.cl",
    "C21235303-5"
  );
  console.log("credential: ", credential);
};

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonInput
              label="Nombre de Usuario"
              placeholder="felipito"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Password input"
              type="password"
              value="password"
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton onClick={handleLogin} shape="round">
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
