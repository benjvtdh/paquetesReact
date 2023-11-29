export interface AuthInit {
  loading: boolean;
  auth?: Auth;
}

export interface Auth {
  loggedIn: boolean;
  userId?: string;
}
