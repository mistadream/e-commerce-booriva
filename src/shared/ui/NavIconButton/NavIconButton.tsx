// react
import { FC, memo } from 'react';
//styles
import cls from './NavIconButton.module.scss';
import { NavLink } from 'react-router-dom';

interface NavIconButtonProps {
  img: string;
  altValue: string;
}

export const NavIconButton: FC<NavIconButtonProps> = memo(
  ({ img, altValue }) => {
    return (
      <NavLink to={'/#'} className={cls.iconButton}>
        <img className={cls.buttonImage} src={img} alt={altValue} />
      </NavLink>
    );
  }
);
