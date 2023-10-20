//react
import { FC } from 'react';
// styles
import cls from './TextArea.module.scss';

interface textArea {
  placeholder: string;
}

export const TextArea: FC<textArea> = ({ placeholder }) => {
  return (
    <textarea placeholder={placeholder} className={cls.textArea}></textarea>
  );
};
