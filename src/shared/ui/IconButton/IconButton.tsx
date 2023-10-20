// react
import { FC } from 'react';
//styles
import cls from './IconButton.module.scss';

interface iconButton {
  img: string;
  altValue: string;
}

export const IconButton: FC<iconButton> = ({ img, altValue }) => {
  return (
    <button className={cls.iconButton}>
      <img className={cls.buttonImage} src={img} alt={altValue} />
    </button>
  );
};
