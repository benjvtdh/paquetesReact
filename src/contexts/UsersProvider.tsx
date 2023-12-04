import { useEffect, useReducer } from "react";
import { UsersContext } from "./UsersContext";
import {
  User,
  fetchUserFn,
  loginFn,
  logoutFn,
} from "../interfaces/usersInterface";
import { authUser, firestore } from "../firebase";
import { cloudOffline } from "ionicons/icons";

const initialState = {
  user: null,
  error: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "user/loaded":
      return { ...state, user: action.payload, loggedIn: true };
    case "login":
      return {
        ...state,
        isLoading: false,
      };
    case "logout":
      return { ...state, isLoading: false, user: null, loggedIn: false };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

interface props {
  children: JSX.Element | JSX.Element[];
  loggedIn: boolean;
  userId: string;
}

export const UsersProvider = ({ children, loggedIn, userId }: props) => {
  const [{ isLoading, user, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchInit() {
      if (loggedIn && userId) {
        await fetchUser(userId);
      }
    }
    fetchInit();
  }, [loggedIn, userId]);

  const login: loginFn = async function (email, password) {
    dispatch({ type: "loading" });
    try {
      const credential = await authUser.signInWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: "login" });

      return credential.user.uid;
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
      return null;
    }
  };

  const logout: logoutFn = async function () {
    dispatch({ type: "loading" });
    try {
      await authUser.signOut();
      dispatch({ type: "logout" });
    } catch (error) {}
  };

  const fetchUser: fetchUserFn = async function (userId) {
    if (userId) {
      try {
        const usersRef = firestore.collection("users").doc(userId);
        const res = await usersRef.get();
        const data = await res.data();

        dispatch({ type: "user/loaded", payload: data as User });
      } catch (error) {}
    }
  };

  return (
    <UsersContext.Provider
      value={{
        loggedIn,
        isLoading,
        user,
        error,
        login,
        logout,
        fetchUser,
        userId,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
