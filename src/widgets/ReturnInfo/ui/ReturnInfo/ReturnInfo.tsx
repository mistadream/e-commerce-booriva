// react
import { memo } from 'react';
//ui
import { ReturnInfoItem } from '../ReturnInfoItem';
// models
import { returnInfoList } from './model/shippingRulesList';
// styles
import cls from './ReturnInfo.module.scss';

export const ReturnInfo = memo(() => {
  return (
    <div className={cls.returnInfo}>
      {returnInfoList.map((item) => {
        return (
          <ReturnInfoItem
            key={item.id}
            img={item.img}
            text={item.text}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
});
