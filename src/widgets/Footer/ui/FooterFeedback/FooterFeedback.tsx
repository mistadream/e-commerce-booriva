// libs
import { LazyLoadImage } from 'react-lazy-load-image-component';
// styles
import cls from './FooterFeedback.module.scss';
// img
import feedbackPhoto from '../../assets/img/feedback.png';

export const FooterFeedback = () => {
  return (
    <div className={cls.feedbackContainer}>
      <div className={cls.feedbackPhoto}>
        <LazyLoadImage
          className={cls.photoImage}
          src={feedbackPhoto}
          alt="Feedback Photo"
        />
      </div>
      <div className={cls.feedbackContent}>
        <p className={cls.contentTitle}>
          Нам важно знать, что ты думаешь про нас! Просто напиши мне!
        </p>
        <a className={cls.contentLink} href="#">
          Написать Иванке
        </a>
      </div>
    </div>
  );
};
