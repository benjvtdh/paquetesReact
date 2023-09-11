import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import AgregarPaquete from "./pages/AgregarPaquete";
import { useState } from "react";

setupIonicReact();

const paquetes = [
  { id: 1, objeto: "Ps5 100GB", enviado: false },
  { id: 2, objeto: "Narnia", enviado: true },
  { id: 3, objeto: "Iphone X", enviado: true },
];

const App: React.FC = () => {
  const [paquetesList, setPaquetes] = useState(paquetes);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home paquetes={paquetesList} />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/agregar-paquete">
            <AgregarPaquete />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
