//react
import { FC } from 'react';
// styles
import cls from './PageCategoryText.module.scss';

interface pageCategoryText {
  children: string;
  subtitle: string;
}

export const PageCategoryText: FC<pageCategoryText> = ({
  children,
  subtitle,
}) => {
  return (
    <div className={cls.pageCategoryText}>
      <h1 className={cls.title}>{children}</h1>
      <span className={cls.subtitle}>{subtitle}</span>
    </div>
  );
};
