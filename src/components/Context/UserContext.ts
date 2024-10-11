import { createContext } from "react";

export interface User {
    token: string;
}

export const UserContext = createContext<User | undefined>(undefined);