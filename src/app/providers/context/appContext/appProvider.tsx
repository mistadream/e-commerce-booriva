// react
import { FC } from 'react';
import { ReactNode } from 'react';
// context
import { AppContext } from './appContext';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const adress = 'Киев, Нижний вал, 37';
  const phone = '+38 063 843 34 71';
  const workTime = 'Пн — Вс: с 11:00 до 21:00';

  return (
    <AppContext.Provider value={{ adress, phone, workTime }}>
      {children}
    </AppContext.Provider>
  );
};
