// react
import { FC, memo } from 'react';
// styles
import cls from './ContactElement.module.scss';

interface ContactElementProps {
  img: string;
  alt: string;
  contactInfo: string;
}

export const ContactElement: FC<ContactElementProps> = memo(
  ({ img, alt, contactInfo }) => {
    return (
      <a href="#" className={cls.contactElement}>
        <img src={img} alt={alt} className={cls.contactImage} />
        <span>{contactInfo}</span>
      </a>
    );
  }
);
