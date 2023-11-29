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
  loggedIn: boolean;
  fetchUser: fetchUserFn;
}

export type loginFn = (email: string, password: string) => Promise<string>;
export type logoutFn = () => void;
export type fetchUserFn = (userId) => void;
