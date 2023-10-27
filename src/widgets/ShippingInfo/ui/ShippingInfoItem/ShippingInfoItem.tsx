// react
import { FC } from 'react';
// libs
import { LazyLoadImage } from 'react-lazy-load-image-component';
// styles
import cls from './ShippingInfoItem.module.scss';

interface ShippingInfoItemProps {
  img: string;
  title: string;
  subtitle: string;
  alt: string;
  description: string;
}

export const ShippingInfoItem: FC<ShippingInfoItemProps> = ({
  img,
  title,
  subtitle,
  description,
  alt,
}) => {
  return (
    <div className={cls.infoItem}>
      <LazyLoadImage className={cls.itemImage} src={img} alt={alt} />
      <div className={cls.itemContent}>
        <div className={cls.contentTitle}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
        <p className={cls.contentDescription}>{description}</p>
      </div>
    </div>
  );
};
