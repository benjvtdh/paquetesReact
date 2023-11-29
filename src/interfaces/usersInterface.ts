import { Auth } from "./authInterface";

export interface User {
  username: string;
  name: string;
  age: number;
  cellPhone: string;
}

export interface IUserContext {
  isLoading: boolean;
  user: User;
  error: string;
  login: loginFn;
  logout: logoutFn;
  auth: Auth;
  fetchUser: fetchUserFn;
}

export type loginFn = (email: string, password: string) => void;
export type logoutFn = () => void;
export type fetchUserFn = (userId) => void;
