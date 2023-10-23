//react
import { FC, memo } from 'react';
// styles
import cls from './Input.module.scss';

interface inputProps {
  placeholder: string;
  type: string;
}

export const Input: FC<inputProps> = memo(({ type, placeholder }) => {
  return <input placeholder={placeholder} className={cls.input} type={type} />;
});
