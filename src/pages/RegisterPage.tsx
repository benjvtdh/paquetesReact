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
import { useState } from "react";

const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [username, setUsername] = useState("");
  const [edad, setEdad] = useState(null);
  const [edadInvalid, setEdadInvalid] = useState(false);

  function handleRegister() {
    setPasswordInvalid(password.length < 6);
    setEdadInvalid(edad < 18);
    setEmailInvalid(validateEmail(email) === null);
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
              onIonChange={(e) => setEmail(e.detail.value)}
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
              onIonChange={(e) => setPassword(e.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
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
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handleRegister}>
          Registrar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Register;
