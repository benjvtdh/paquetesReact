import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonLoading,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { PaquetesProvider } from "./contexts/PaquetesProvider";
import { auth } from "./firebase";
import AppTabs from "./components/AppTabs";

import Login from "./pages/Login";
import { useEffect, useState } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/RegisterPage";

setupIonicReact();

const App: React.FC = () => {
  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({ loading: false, loggedIn: Boolean(user) });
    });
  }, []);

  if (authState.loading) {
    return <IonLoading isOpen />;
  }
  return (
    <IonApp>
      <PaquetesProvider loggedIn={authState.loggedIn}>
        <IonReactRouter>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/user">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/user/home" />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </PaquetesProvider>
    </IonApp>
  );
};

export default App;
