import { useEffect, useState } from "react";
import { auth as firebaseAuth } from "../firebase";
import { AuthInit } from "../interfaces/paquetesInterface";

export function useAuth(): AuthInit {
  const [authState, setAuthState] = useState<AuthInit>({
    loading: true,
  });
  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser
        ? { loggedIn: true, userId: firebaseUser.uid }
        : { loggedIn: false };
      setAuthState({ loading: false, auth });
    });
  }, []);

  return authState;
}
