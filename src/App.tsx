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
import { useAuth } from "./hooks/useAuth";

setupIonicReact();

const App: React.FC = () => {
  const authState = useAuth();

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
