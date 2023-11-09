// hooks
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useAppContext } from '@/shared/hooks/useAppContext';
// ui
import { ContactElement } from '@/shared/ui/ContactElement';
// styles
import cls from './HeaderContactsMobile.module.scss';
// images
import phoneImage from '../../../assets/svg/phone.svg';

export const HeaderContactsMobile = () => {
  const { phone } = useAppContext();
  const contactRender = useMediaQuery('(max-width: 767.98px)');

  return (
    contactRender && (
      <div className={cls.headerMobileContacts}>
        <ContactElement img={phoneImage} alt="phone" contactInfo={phone} />
      </div>
    )
  );
};
