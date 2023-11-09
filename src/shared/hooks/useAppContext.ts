// react
import { useContext } from 'react';
// context
import { AppContext } from '@/app/providers/context/appContext/appContext';

export const useAppContext = () => {
  return useContext(AppContext);
};
