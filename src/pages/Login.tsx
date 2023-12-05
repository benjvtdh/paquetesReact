import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Redirect } from "react-router";
import { useUser } from "../hooks/useUser";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login, fetchUser, loggedIn } = useUser();

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
        <IonToolbar color="dark">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="center">
          <IonList>
            <IonItem>
              <IonInput
                type="email"
                placeholder="test@gmail.com"
                label="Correo"
                labelPlacement="floating"
                value={email}
                onIonInput={(event) => setEmail(event.detail.value)}
                className={error ? "ion-invalid ion-touched" : ""}
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
                className={error ? "ion-invalid ion-touched" : ""}
              ></IonInput>
            </IonItem>
            {error && <p className="error">Contraseña o correo incorrecto</p>}
          </IonList>

          <IonRow className="ion-justify-content-center">
            <IonButton
              onClick={handleLogin}
              shape="round"
            >
              Ingresar
            </IonButton>
          </IonRow>
          <IonButton
            expand="full"
            fill="clear"
            routerLink="/register"
          >
            ¿No tienes una cuenta?
          </IonButton>

          <IonLoading isOpen={isLoading}></IonLoading>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
