// react
import { useContext } from 'react';
// context
import { GlobalContext } from '@/app/providers/context/global/globalContext';

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
