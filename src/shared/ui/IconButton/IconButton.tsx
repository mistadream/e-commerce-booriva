// react
import { FC, memo } from 'react';
// libs
import classNames from 'classnames';
// styles
import cls from './IconButton.module.scss';
import { Link } from 'react-router-dom';

interface IconButtonProps {
  img: string;
  altValue: string;
  variant: 'header' | 'footer' | 'mobileNav';
  text?: string;
}

export const IconButton: FC<IconButtonProps> = memo(
  ({ img, altValue, variant, text }) => {
    const headerVariant = variant === 'header';

    const footerVariant = variant === 'footer';

    const mobileNavVariant = variant === 'mobileNav';

    return (
      <Link
        to={'/#'}
        className={classNames(cls.iconButton, {
          [cls.headerButton]: headerVariant,
          [cls.footerButton]: footerVariant,
          [cls.mobileNavButton]: mobileNavVariant,
        })}
      >
        <img
          className={classNames(cls.buttonImage, {
            [cls.headerButtonImage]: headerVariant,
            [cls.footerButtonImage]: footerVariant,
            [cls.mobileNavButtonImage]: mobileNavVariant,
          })}
          src={img}
          alt={altValue}
        />
        {mobileNavVariant ? <span className={cls.iconText}>{text}</span> : null}
      </Link>
    );
  }
);
