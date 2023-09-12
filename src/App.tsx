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
import { homeOutline, addCircleOutline } from "ionicons/icons";
import Home from "./pages/Home";
import AgregarPaquete from "./pages/AgregarPaquete";
import PaquetePage from "./pages/PaquetePage";
import { PaquetesContext } from "./interfaces/paquetes";
import { useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [paquetesList, setPaquetes] = useState([
    { id: 1, objeto: "Ps5 100GB", enviado: false },
    { id: 2, objeto: "Narnia", enviado: true },
    { id: 3, objeto: "Iphone X", enviado: true },
  ]);

  function handleAgregar(nuevoPaquete) {
    const nuevoPaqObj = { ...nuevoPaquete, enviado: false };
    setPaquetes((paquetes) => [...paquetes, nuevoPaqObj]);
  }
  return (
    <IonApp>
      <PaquetesContext.Provider value={{ paquetesList }}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/paquete/:id">
                <PaquetePage />
              </Route>
              <Route exact path="/agregar-paquete">
                <AgregarPaquete onAgregar={handleAgregar} />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="agregar" href="/agregar-paquete">
                <IonIcon icon={addCircleOutline} />
                <IonLabel>Agregar</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </PaquetesContext.Provider>
    </IonApp>
  );
};

export default App;
