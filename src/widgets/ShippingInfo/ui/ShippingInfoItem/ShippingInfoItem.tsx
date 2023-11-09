// react
import { FC } from 'react';
// libs
import { LazyLoadImage } from 'react-lazy-load-image-component';
// styles
import cls from './ShippingInfoItem.module.scss';

interface ShippingInfoItemProps {
  img: string;
  titleFirstLine: string;
  titleSecondLine: string;
  alt: string;
  description: string;
}

export const ShippingInfoItem: FC<ShippingInfoItemProps> = ({
  img,
  titleFirstLine,
  titleSecondLine,
  description,
  alt,
}) => {
  return (
    <div className={cls.infoItem}>
      <LazyLoadImage className={cls.itemImage} src={img} alt={alt} />
      <div className={cls.itemContent}>
        <div className={cls.contentTitle}>
          {titleFirstLine}
          <br />
          {titleSecondLine}
        </div>
        <p className={cls.contentDescription}>{description}</p>
      </div>
    </div>
  );
};
