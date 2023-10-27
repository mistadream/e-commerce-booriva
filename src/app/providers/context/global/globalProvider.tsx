// react
import { FC } from 'react';
import { ReactNode } from 'react';
// context
import { GlobalContext } from './globalContext';

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const adress = 'Киев, Нижний вал, 37';
  const phone = '+38 063 843 34 71';
  const workTime = 'Пн — Вс: с 11:00 до 21:00';

  return (
    <GlobalContext.Provider value={{ adress, phone, workTime }}>
      {children}
    </GlobalContext.Provider>
  );
};
