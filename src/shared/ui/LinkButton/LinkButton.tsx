// react
import { Link } from 'react-router-dom';
import { FC, memo } from 'react';
// libs
import classNames from 'classnames';
// styles
import cls from './LinkButton.module.scss';

interface LinkButtonProps {
  children: string;
}

export const LinkButton: FC<LinkButtonProps> = memo(({ children }) => {
  return (
    <Link to={'/#'} className={classNames(cls.link)}>
      {children}
    </Link>
  );
});
