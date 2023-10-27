// react
import { FC } from 'react';
// styles
import cls from './ReturnInfoItem.module.scss';

interface ReturnInfoItemProps {
  img: string;
  text: string;
  alt: string;
}

export const ReturnInfoItem: FC<ReturnInfoItemProps> = ({ img, text, alt }) => {
  return (
    <div className={cls.returnInfoItem}>
      <img className={cls.itemImage} src={img} alt={alt} />
      <p className={cls.itemContent}>{text}</p>
    </div>
  );
};
