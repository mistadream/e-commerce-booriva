// react
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
// libs
import classNames from 'classnames';
// styles
import cls from './Logo.module.scss';
// svg
import PageLogo from './svg/logo.svg?react';

interface LogoProps {
  header?: boolean;
  footer?: boolean;
}

export const Logo: FC<LogoProps> = memo(({ header, footer }) => {
  return (
    <div
      className={classNames(
        cls.logoContainer,
        header ? [cls.headerContainer] : null,
        footer ? [cls.footerContainer] : null
      )}
    >
      <NavLink to={'/#'} className={cls.logoLink}>
        <PageLogo
          className={classNames(
            cls.LogoImage,
            header ? [cls.headerLogo] : null,
            footer ? [cls.footerLogo] : null
          )}
        />
      </NavLink>
    </div>
  );
});
