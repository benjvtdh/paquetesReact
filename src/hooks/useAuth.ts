import { useEffect, useState } from "react";
import { authUser } from "../firebase";
import { AuthInit } from "../interfaces/authInterface";

export function useAuth() {
  const [authState, setAuthState] = useState({
    loading: true,
    loggedIn: false,
    userId: null,
  });
  useEffect(() => {
    return authUser.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser
        ? { loggedIn: true, userId: firebaseUser.uid }
        : { loggedIn: false, userId: null };
      setAuthState({
        loading: false,
        loggedIn: auth.loggedIn,
        userId: auth.userId,
      });
    });
  }, []);

  return authState;
}
