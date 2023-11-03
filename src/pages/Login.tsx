import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { authUser } from "../firebase";
import { useState } from "react";
import { usePaquetes } from "../hooks/usePaquetes";
import { Redirect } from "react-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = usePaquetes();
  const [status, setStatus] = useState({ loading: false, error: false });

  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await authUser.signInWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      setStatus({ loading: false, error: true });
    }
  };

  if (auth.loggedIn) {
    return <Redirect to="/user/home" />;
  }

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

        <IonButton onClick={handleLogin} shape="round">
          Ingresar
        </IonButton>
        <IonButton expand="block" fill="clear" routerLink="/register">
          ¿No tienes una cuenta?
        </IonButton>
        <IonLoading isOpen={status.loading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default Login;
