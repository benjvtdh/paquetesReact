import { createContext } from "react";
import { IUserContext } from "../interfaces/usersInterface";

export const UsersContext = createContext<IUserContext | null>(null);
