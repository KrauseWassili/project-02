import { useState, type ReactNode } from "react";
import { CountContext } from "../context/CountContext";

export const CountProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
};