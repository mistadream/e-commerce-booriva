//react
import { FC } from 'react';
// styles
import cls from './Button.module.scss';

interface button {
  children: string;
}

export const Button: FC<button> = ({ children }) => {
  return <button className={cls.button}>{children}</button>;
};
