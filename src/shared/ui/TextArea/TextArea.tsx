//react
import { FC, memo } from 'react';
// styles
import cls from './TextArea.module.scss';

interface textAreaProps {
  placeholder: string;
}

export const TextArea: FC<textAreaProps> = memo(({ placeholder }) => {
  return (
    <textarea placeholder={placeholder} className={cls.textArea}></textarea>
  );
});
