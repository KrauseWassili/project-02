import { createContext } from "react";
interface CountContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);



