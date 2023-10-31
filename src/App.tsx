import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { PaquetesProvider } from "./contexts/PaquetesProvider";
import { auth } from "./firebase";
import AppTabs from "./components/AppTabs";

import Login from "./pages/Login";
import { useEffect, useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log("onAuthStateChanged:", user);
  //   });
  // }, []);
  console.log(loggedIn);
  return (
    <IonApp>
      <PaquetesProvider loggedIn={loggedIn} onLoggedIn={setLoggedIn}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/user">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/user/home" />
          </IonRouterOutlet>
        </IonReactRouter>
      </PaquetesProvider>
    </IonApp>
  );
};

export default App;
