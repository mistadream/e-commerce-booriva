// react
import { FC } from 'react';
// libs
import { LazyLoadImage } from 'react-lazy-load-image-component';
// styles
import cls from './InstagramInfoFirstElement.module.scss';

interface InstagramInfoFirstElementProps {
  imageFirst: string;
  altFirst: string;
  ariaLabelFirst: string;
  imageSecond: string;
  altSecond: string;
  ariaLabelSecond: string;
}

export const InstagramInfoFirstElement: FC<InstagramInfoFirstElementProps> = ({
  imageFirst,
  altFirst,
  ariaLabelFirst,
  imageSecond,
  altSecond,
  ariaLabelSecond,
}) => {
  return (
    <div className={cls.firstElem}>
      <div className={cls.firstElemText}>
        <h2 className={cls.firstElementTitle}>Instagram</h2>
        <p className={cls.firstElementSubtitle}>
          Мы в экстазе, когда ты нас отмечаешь) <br /> Отмечай плз чаще
        </p>
      </div>
      <div className={cls.firstElementImages}>
        <a target="blank" href="#" aria-label={ariaLabelFirst}>
          <LazyLoadImage
            className={cls.elemImageFirst}
            src={imageFirst}
            alt={altFirst}
          />
        </a>
        <a target="blank" href="#" aria-label={ariaLabelSecond}>
          <LazyLoadImage
            className={cls.elemImageSecond}
            src={imageSecond}
            alt={altSecond}
          />
        </a>
      </div>
    </div>
  );
};
