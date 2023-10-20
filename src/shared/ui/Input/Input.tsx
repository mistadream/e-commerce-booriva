//react
import { FC } from 'react';
// styles
import cls from './Input.module.scss';

interface input {
  placeholder: string;
  type: string;
}

export const Input: FC<input> = ({ type, placeholder }) => {
  return <input placeholder={placeholder} className={cls.input} type={type} />;
};
