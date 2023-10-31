import { useEffect, useState } from "react";
import { auth as firebaseAuth } from "../firebase";

export function useAuth() {
  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
  });
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setAuthState({ loading: false, loggedIn: Boolean(user) });
    });
  }, []);

  return authState;
}
