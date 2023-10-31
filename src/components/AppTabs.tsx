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
import { addCircle, home } from "ionicons/icons";
import { usePaquetes } from "../contexts/PaquetesContext";

const AppTabs: React.FC = () => {
  const { loggedIn } = usePaquetes();

  // If user is not logged, is redirected to Login
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/user/home">
          <Home />
        </Route>

        <Route exact path="/user/paquete/:id">
          <PaquetePage />
        </Route>
        <Route exact path="/user/agregar-paquete">
          <AgregarPaquete />
        </Route>
        <Route exact path="/user/repartidor/:repartidorId">
          <RepartidorPage />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/user/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="agregar-paquete" href="/user/agregar-paquete">
          <IonIcon icon={addCircle} />
          <IonLabel>Agregar paquete</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
