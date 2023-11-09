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
  variant: 'header' | 'footer';
}

export const Logo: FC<LogoProps> = memo(({ variant }) => {
  const headerVariant = variant === 'header';

  const footerVariant = variant === 'footer';

  return (
    <div
      className={classNames(cls.logoContainer, {
        [cls.headerContainer]: headerVariant,
        [cls.footerContainer]: footerVariant,
      })}
    >
      <NavLink
        to={'/#'}
        className={cls.logoLink}
        aria-label="Page logo, go to main page"
      >
        <PageLogo
          className={classNames(cls.logoImage, {
            [cls.headerLogo]: headerVariant,
            [cls.footerLogo]: footerVariant,
          })}
        />
      </NavLink>
    </div>
  );
});
