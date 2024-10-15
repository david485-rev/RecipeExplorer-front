import { createContext } from "react";

export interface User {
    token: string;
    uuid: string;
    username: string;
    picture: string | null;
    description: string | null;
    email: string | null;
    creationDate: number;
    type: string;
}

export const UserContext = createContext<User | undefined>(undefined);