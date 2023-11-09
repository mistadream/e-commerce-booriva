// react
import { FC } from 'react';
// libs
import { LazyLoadImage } from 'react-lazy-load-image-component';
// styles
import cls from './InstagramInfoSecondElement.module.scss';

interface InstagramInfoSecondElementProps {
  imageFirst: string;
  altFirst: string;
  ariaLabelFirst: string;
  imageSecond: string;
  altSecond: string;
  ariaLabelSecond: string;
}

export const InstagramInfoSecondElement: FC<
  InstagramInfoSecondElementProps
> = ({
  imageFirst,
  altFirst,
  ariaLabelFirst,
  imageSecond,
  altSecond,
  ariaLabelSecond,
}) => {
  return (
    <div className={cls.secondElement}>
      <div className={cls.secondElementImages}>
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
      <div className={cls.secondElementText}>
        <h2 className={cls.secondElementTag}>#boorivagirls </h2>
        <p className={cls.secondElementSubtitle}>
          Ставь тэг чтобы быть в нашей тусовке.
        </p>
      </div>
    </div>
  );
};
