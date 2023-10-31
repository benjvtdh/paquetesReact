import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { auth } from "../firebase";
import { useState } from "react";
import { usePaquetes } from "../contexts/PaquetesContext";
import { Redirect } from "react-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, onLoggedIn } = usePaquetes();
  const [status, setStatus] = useState({ loading: false, error: false });
  if (loggedIn) {
    return <Redirect to="/user/home" />;
  }
  // const handleLogin = async () => {
  //   try {
  //     setStatus({ loading: true, error: false });
  //     const credential = await auth.signInWithEmailAndPassword(email, password);
  //     setStatus({ loading: false, error: false });
  //     console.log("credential: ", credential);
  //   } catch (error) {
  //     setStatus({ loading: false, error: true });
  //     console.log("error:", error.message);
  //   }
  // };
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
              label="Email"
              placeholder="test@gmail.com"
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Password input"
              type="password"
              value="password"
              onIonChange={(e) => setPassword(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonList>
        {status.error && <IonText color="danger">Invalid Credentials</IonText>}
        <IonButton onClick={() => onLoggedIn(true)} shape="round">
          Loginc
        </IonButton>
        <IonLoading isOpen={status.loading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default Login;
