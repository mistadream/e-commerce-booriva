// react
import { createContext } from 'react';

interface AppContextValue {
  adress: string;
  phone: string;
  workTime: string;
}

export const AppContext = createContext({} as AppContextValue);
