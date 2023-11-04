import { useEffect, useState } from "react";
import { authUser, firestore } from "../firebase";
import { AuthInit } from "../interfaces/paquetesInterface";

export function useAuth(): AuthInit {
  const [authState, setAuthState] = useState<AuthInit>({
    loading: true,
  });
  useEffect(() => {
    return authUser.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser
        ? { loggedIn: true, userId: firebaseUser.uid }
        : { loggedIn: false };
      setAuthState({ loading: false, auth });
    });
  }, []);

  return authState;
}
