// react
import { FC } from 'react';
// styles
import cls from './FooterInfoBlockTitle.module.scss';

interface FooterInfoBlockTitleProps {
  children: string;
}

export const FooterInfoBlockTitle: FC<FooterInfoBlockTitleProps> = ({
  children,
}) => {
  return <h2 className={cls.categoryTitle}>{children}</h2>;
};
