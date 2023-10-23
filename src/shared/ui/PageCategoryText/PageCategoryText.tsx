//react
import { FC, memo } from 'react';
// styles
import cls from './PageCategoryText.module.scss';

interface pageCategoryTextProps {
  title: string;
  subtitle: string;
}

export const PageCategoryText: FC<pageCategoryTextProps> = memo(
  ({ title, subtitle }) => {
    return (
      <div className={cls.pageCategoryText}>
        <h1 className={cls.title}>{title}</h1>
        <span className={cls.subtitle}>{subtitle}</span>
      </div>
    );
  }
);
