// react
import { memo } from 'react';
// ui
import { InstagramInfoFirstElement } from '../InstagramInfoFirstElement';
import { InstagramInfoSecondElement } from '../InstagramInfoSecondElement';
// styles
import cls from './InstagramInfo.module.scss';
// images
import firstElementPhotoFirst from '../../assets/img/firstElementPhotoFirst.png?&format=webp';
import firstElementPhotoSecond from '../../assets/img/firstElementPhotoSecond.png?&format=webp';

import secondElementPhotoFirst from '../../assets/img/secondElementPhotoFirst.png?&format=webp';
import secondElementPhotoSecond from '../../assets/img/secondElementPhotoSecond.png?&format=webp';

export const InstagramInfo = memo(() => {
  return (
    <div className={cls.instagramInfo}>
      <div className={cls.instagramInfoContainer}>
        <InstagramInfoFirstElement
          imageFirst={firstElementPhotoFirst}
          altFirst="Hoodie photo link to Intagram"
          ariaLabelFirst="Hoodie photo link to Intagram"
          imageSecond={firstElementPhotoSecond}
          altSecond="Cloak photo link to Intagram"
          ariaLabelSecond="Cloak photo link to Intagram"
        />
        <InstagramInfoSecondElement
          imageFirst={secondElementPhotoFirst}
          altFirst="Clothes photo link to Intagram"
          ariaLabelFirst="Clothes photo link to Intagram"
          imageSecond={secondElementPhotoSecond}
          altSecond="Cloak photo link to Intagram"
          ariaLabelSecond="Cloak photo link to Intagram"
        />
      </div>
    </div>
  );
});
