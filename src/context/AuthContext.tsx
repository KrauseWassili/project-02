import { createContext } from "react";
import type { User } from "../types/User";

interface AuthContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);