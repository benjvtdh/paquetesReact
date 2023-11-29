export interface Auth {
  loggedIn: boolean;
  userId?: string;
}

export interface AuthInit {
  loading: boolean;
  auth?: Auth;
}
