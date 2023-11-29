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

import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, login, fetchUser } = useUser();
  const authState = useAuth();

  async function handleLogin() {
    await login(email, password);
  }

  if (authState.loggedIn) {
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
              className={error ? "ion-invalid ion-touched" : ""}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton
          onClick={handleLogin}
          shape="round"
        >
          Ingresar
        </IonButton>
        <IonButton
          expand="block"
          fill="clear"
          routerLink="/register"
        >
          ¿No tienes una cuenta?
        </IonButton>
        <IonLoading isOpen={isLoading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};

export default Login;
