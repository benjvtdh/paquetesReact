import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonLoading,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { PaquetesProvider } from "./contexts/PaquetesProvider";
import AppTabs from "./components/AppTabs";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/RegisterPage";

import { UsersProvider } from "./contexts/UsersProvider";
import { useUser } from "./hooks/useUser";

setupIonicReact();

const App: React.FC = () => {
  const { isLoading } = useUser();

  if (isLoading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonApp>
      <UsersProvider>
        <PaquetesProvider>
          <IonReactRouter>
            <Switch>
              <Route
                exact
                path="/login"
              >
                <Login />
              </Route>
              <Route
                exact
                path="/register"
              >
                <Register />
              </Route>
              <Route path="/user">
                <AppTabs />
              </Route>
              <Redirect
                exact
                path="/"
                to="/user/home"
              />
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </IonReactRouter>
        </PaquetesProvider>
      </UsersProvider>
    </IonApp>
  );
};

export default App;
