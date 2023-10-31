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
  const { loggedIn } = usePaquetes();
  const [status, setStatus] = useState({ loading: false, error: false });
  if (loggedIn) {
    return <Redirect to="/user/home" />;
  }
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log("password: ", password);
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithEmailAndPassword(email, password);

      console.log("credential: ", credential);
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log("error:", error.message);
    }
  };

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
              type="email"
              placeholder="test@gmail.com"
              label="Correo"
              labelPlacement="floating"
              value={email}
              onIonInput={(event) => setEmail(event.detail.value)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              label="Contraseña"
              type="password"
              labelPlacement="floating"
              placeholder="*********"
              value={password}
              onIonInput={(event) => setPassword(event.detail.value)}
              errorText="Contraseña o correo incorrecto"
              className={status.error ? "ion-invalid ion-touched" : ""}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton onClick={(e) => handleLogin(e)} shape="round">
          Ingresar
        </IonButton>
        <IonLoading isOpen={status.loading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default Login;
