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
import { useEffect, useState } from "react";
import { Redirect } from "react-router";

import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login, fetchUser, loggedIn } = useUser();

  const authInit = useAuth();

  useEffect(() => {
    console.log("aki mount");
    console.log(authInit);
    if (authInit.auth) {
      console.log("akipo");
      fetchUser(authInit.auth.userId);
    }
  }, []);

  async function handleLogin() {
    const userId = await login(email, password);
    await fetchUser(userId);
  }

  if (loggedIn) {
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
