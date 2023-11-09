// react
import { memo } from 'react';
// ui
import { ShippingInfoItem } from '../ShippingInfoItem/ShippingInfoItem';
// model
import { shippingInfoList } from '../../model/shippingInfoList';
// styles
import cls from './ShippingInfo.module.scss';

export const ShippingInfo = memo(() => {
  return (
    <div className={cls.shippingInfo}>
      <div className={cls.shippingInfoContainer}>
        {shippingInfoList.map((item, index) => {
          return (
            <ShippingInfoItem
              key={index}
              img={item.img}
              titleFirstLine={item.titleFirstLine}
              titleSecondLine={item.titleSecondLine}
              description={item.description}
              alt={item.alt}
            />
          );
        })}
      </div>
    </div>
  );
});
