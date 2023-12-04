import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import Home from "../pages/Home";
import PaquetePage from "../pages/PaquetePage";
import AgregarPaquete from "../pages/AgregarPaquete";
import RepartidorPage from "../pages/RepartidorPage";
import { addCircle, home, settings } from "ionicons/icons";
import SettingsPage from "../pages/SettingsPage";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

// Protected Pages
const AppTabs: React.FC = () => {
  const { loggedIn } = useUser();

  // If user is not logged, is redirected to Login
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          exact
          path="/user/home"
        >
          <Home />
        </Route>

        <Route
          exact
          path="/user/paquete/:id"
        >
          <PaquetePage />
        </Route>
        <Route
          exact
          path="/user/agregar-paquete"
        >
          <AgregarPaquete />
        </Route>
        <Route
          exact
          path="/user/repartidor/:repartidorId"
        >
          <RepartidorPage />
        </Route>
        <Route
          exact
          path="/user/settings"
        >
          <SettingsPage />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton
          tab="home"
          href="/user/home"
        >
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton
          tab="agregar-paquete"
          href="/user/agregar-paquete"
        >
          <IonIcon icon={addCircle} />
          <IonLabel>Agregar paquete</IonLabel>
        </IonTabButton>

        <IonTabButton
          tab="settings"
          href="/user/settings"
        >
          <IonIcon icon={settings} />
          <IonLabel>Configuración</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
