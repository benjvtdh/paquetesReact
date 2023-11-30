import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonLoading,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { authUser } from "../firebase";
import { firestore } from "../firebase";
import { usePaquetes } from "../hooks/usePaquetes";
import { Redirect } from "react-router";
import { useUser } from "../hooks/useUser";

const validateEmail = (email: string) => {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
};

const Register: React.FC = () => {
  const [status, setStatus] = useState({ loading: false, error: false });
  const { loggedIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);

  const [countryCode, setCountryCode] = useState("+569");
  const [cellPhone, setCellPhone] = useState("");
  const [name, setName] = useState("");

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [ageInvalid, setAgeInvalid] = useState(false);

  const handleValidation = () => {
    const emailValidation = validateEmail(email) === null;
    const passwordValidation = password.length < 6;
    const ageValidation = age < 18;

    if (!emailValidation && !passwordValidation && !ageValidation) {
      const fullCellphone = countryCode + cellPhone;
      handleRegister(fullCellphone);
    } else {
      setEmailInvalid(emailValidation);
      setPasswordInvalid(passwordValidation);
      setAgeInvalid(ageValidation);
    }
  };

  const handleRegister = async (fullCellphone) => {
    try {
      setStatus({ loading: true, error: false });

      const credential = await authUser.createUserWithEmailAndPassword(
        email,
        password
      );

      const usersRef = await firestore
        .collection("users")
        .doc(credential.user.uid);
      const userData = { age, cellPhone: fullCellphone, name, username };
      const userRef = await usersRef.set(userData);
    } catch (error) {
      setStatus({ loading: false, error: true });
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
              type="text"
              label="Nombre"
              labelPlacement="floating"
              value={name}
              onIonChange={(e) => setName(e.detail.value)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              className={ageInvalid ? "ion-invalid ion-touched" : ""}
              type="number"
              label="Edad"
              value={age}
              onIonChange={(e) => setAge(e.detail.value)}
              errorText="Debes ser mayor a 18 años"
              labelPlacement="floating"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonSelect
              label="Celular"
              placeholder="Chile +56 (9)"
              value={countryCode}
              onIonChange={(e) => setCountryCode(e.detail.value)}
            >
              <IonSelectOption value="+569">Chile +56 (9) </IonSelectOption>
              <IonSelectOption value="+377">Mónaco +377 </IonSelectOption>
            </IonSelect>
            <IonInput
              className="ion-margin-horizontal"
              placeholder="xxxx-xxxx"
              value={cellPhone}
              onIonInput={(e) => {
                setCellPhone(e.detail.value);
              }}
            ></IonInput>
          </IonItem>
        </IonList>

        <IonButton
          onClick={handleValidation}
          shape="round"
        >
          Crear cuenta
        </IonButton>
        <IonButton
          expand="block"
          fill="clear"
          routerLink="/login"
        >
          ¿Ya tienes una cuenta?
        </IonButton>
        <IonLoading isOpen={status.loading}></IonLoading>
      </IonContent>
    </IonPage>
  );
};
export default Register;
