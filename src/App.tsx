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
import { PaquetesContext } from "./interfaces/paquetes";
import { useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [paquetesList, setPaquetes] = useState([
    { id: 1, objeto: "Ps5 100GB", enviado: false, repartidorId: 2 },
    { id: 2, objeto: "Narnia", enviado: true, repartidorId: 2 },
    { id: 3, objeto: "Iphone X", enviado: true, repartidorId: 4 },
  ]);

  const [repartidoresList, setRepartidores] = useState([
    { repartidorId: 2, nombre: "Benjamin Cortes" },
    { repartidorId: 4, nombre: "Anibaldo Villegas" },
  ]);

  function handleAgregar(idPaquete, objetoPaquete, idRepartidor) {
    const nuevoPaqObj = {
      id: Number(idPaquete),
      objeto: objetoPaquete,
      enviado: false,
      repartidorId: idRepartidor,
    };
    setPaquetes((paquetes) => [...paquetes, nuevoPaqObj]);
  }
  return (
    <IonApp>
      <PaquetesContext.Provider value={{ paquetesList, repartidoresList }}>
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
      </PaquetesContext.Provider>
    </IonApp>
  );
};

export default App;
