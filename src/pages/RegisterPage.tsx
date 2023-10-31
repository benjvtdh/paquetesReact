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
import { useState } from "react";
import { auth } from "../firebase";
import { usePaquetes } from "../hooks/usePaquetes";
import { Redirect } from "react-router";

const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};

const Register: React.FC = () => {
  const [status, setStatus] = useState({ loading: false, error: false });
  const { loggedIn } = usePaquetes();
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [username, setUsername] = useState("");
  const [edad, setEdad] = useState(null);
  const [edadInvalid, setEdadInvalid] = useState(false);

  const handleRegister = async () => {
    try {
      setStatus({ loading: true, error: false });
      //   setEmailInvalid(validateEmail(email) === null);
      //   setPasswordInvalid(password.length < 6);
      // setEdadInvalid(edad < 18);
      const credential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("credential: ", credential);
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log(error);
    }
  };
  if (loggedIn) {
    return <Redirect to="/user/home" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrarse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonInput
              className={emailInvalid ? "ion-invalid ion-touched" : ""}
              type="email"
              value={email}
              label="Email"
              labelPlacement="floating"
              onIonInput={(e) => setEmail(e.detail.value)}
              errorText="Ingresar correo válido"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              className={passwordInvalid ? "ion-invalid ion-touched" : ""}
              type="password"
              label="Contraseña"
              labelPlacement="floating"
              errorText="La contraseña debe ser mayor a 6 caracteres"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value)}
            ></IonInput>
          </IonItem>
          {/* <IonItem>
            <IonInput
              type="text"
              label="Nombre de Usuario"
              labelPlacement="floating"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              className={edadInvalid ? "ion-invalid ion-touched" : ""}
              type="number"
              label="Edad"
              value={edad}
              onIonChange={(e) => setEdad(e.detail.value)}
              errorText="Debes ser mayor a 18 años"
              labelPlacement="floating"
            ></IonInput>
          </IonItem> */}
        </IonList>

        <IonButton onClick={handleRegister} shape="round">
          Crear cuenta
        </IonButton>
        <IonButton expand="block" fill="clear" routerLink="/login">
          ¿Ya tienes una cuenta?
        </IonButton>
        <IonLoading isOpen={status.loading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};
export default Register;
