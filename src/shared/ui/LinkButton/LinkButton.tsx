//react
import { FC } from 'react';
//libs
import classNames from 'classnames';
// styles
import cls from './LinkButton.module.scss';

interface linkButton {
  children: string;
}

export const LinkButton: FC<linkButton> = ({ children }) => {
  return <button className={classNames(cls.itemLink)}>{children}</button>;
};
