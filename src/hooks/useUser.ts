import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { IUserContext } from "../interfaces/usersInterface";

export function useUser() {
  const context = useContext<IUserContext | null>(UsersContext);
  if (context === undefined)
    throw new Error("UsersContext fue usado fuera de UsersProvider");
  return context;
}
