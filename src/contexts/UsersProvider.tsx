import { useEffect, useReducer } from "react";
import { UsersContext } from "./UsersContext";
import {
  User,
  fetchUserFn,
  loginFn,
  logoutFn,
} from "../interfaces/usersInterface";
import { authUser, firestore } from "../firebase";

const initialState = {
  isLoading: false,
  user: null,
  error: "",
  auth: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "user/loaded":
      return { ...state, user: action.payload };
    case "login":
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
      };
    case "logout":
      return { ...state, isLoading: false, loggedIn: false, user: null };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

interface props {
  children:
}


export const UsersProvider = ({ children, auth }: props) => {
  const [{ isLoading, user, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login: loginFn = async function (email, password) {
    dispatch({ type: "loading" });
    try {
      const credential = await authUser.signInWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: "login" });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  };

  const logout: logoutFn = async function () {
    await authUser.signOut();
    dispatch({ type: "logout" });
  };

  const fetchUser: fetchUserFn = async function (userId) {
    try {
      const usersRef = firestore.collection("users").doc(userId);
      const res = await usersRef.get();
      const data = await res.data();
      dispatch({ type: "user/loaded", payload: data as User });
    } catch (error) {}
  };

  return (
    <UsersContext.Provider
      value={{ isLoading, user, error, login, logout, fetchUser, auth }}
    >
      {children}
    </UsersContext.Provider>
  );
};
