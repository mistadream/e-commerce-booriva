//react
import { FC, memo } from 'react';
// styles
import cls from './Button.module.scss';

interface buttonProps {
  children: string;
}

export const Button: FC<buttonProps> = memo(({ children }) => {
  return <button className={cls.button}>{children}</button>;
});
