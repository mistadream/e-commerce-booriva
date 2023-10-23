//react
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
//libs
import classNames from 'classnames';
// styles
import cls from './NavButton.module.scss';

interface NavButtonProps {
  children: string;
}

export const NavButton: FC<NavButtonProps> = memo(({ children }) => {
  return (
    <NavLink to={'/#'} className={classNames(cls.link)}>
      {children}
    </NavLink>
  );
});
