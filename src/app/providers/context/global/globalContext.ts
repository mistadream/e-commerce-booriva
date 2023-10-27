import { createContext } from 'react';

interface GlobalContextValue {
  adress: string;
  phone: string;
  workTime: string;
}

export const GlobalContext = createContext({} as GlobalContextValue);
