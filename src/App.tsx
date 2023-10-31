import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, addCircle, personAdd } from "ionicons/icons";

import Home from "./pages/Home";
import AgregarPaquete from "./pages/AgregarPaquete";
import PaquetePage from "./pages/PaquetePage";
import RepartidorPage from "./pages/RepartidorPage";

import Login from "./pages/Login";
import { PaquetesProvider } from "./contexts/PaquetesProvider";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <PaquetesProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/paquete/:id">
                <PaquetePage />
              </Route>
              <Route exact path="/agregar-paquete">
                <AgregarPaquete />
              </Route>
              <Route exact path="/repartidor/:repartidorId">
                <RepartidorPage />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="agregar-paquete" href="/agregar-paquete">
                <IonIcon icon={addCircle} />
                <IonLabel>Agregar paquete</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </PaquetesProvider>
    </IonApp>
  );
};

export default App;
