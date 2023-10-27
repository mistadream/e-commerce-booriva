// react
import { memo } from 'react';
// ui
import { ShippingInfoItem } from '../ShippingInfoItem/ShippingInfoItem';
// model
import { shippingInfoList } from './model/shippingInfoList';
// styles
import cls from './ShippingInfo.module.scss';

export const ShippingInfo = memo(() => {
  return (
    <div className={cls.shippingInfo}>
      {shippingInfoList.map((item) => {
        return (
          <ShippingInfoItem
            key={item.id}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
});
