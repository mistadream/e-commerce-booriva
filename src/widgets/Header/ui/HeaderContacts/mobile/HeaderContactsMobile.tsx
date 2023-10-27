// hooks
import { useGlobalContext } from '@/shared/hooks/useGlobalContext';
// ui
import { ContactElement } from '@/shared/ui/ContactElement';
// styles
import cls from './HeaderContactsMobile.module.scss';
// images
import phoneImage from '../../../assets/svg/phone.svg';

export const HeaderContactsMobile = () => {
  const { phone } = useGlobalContext();

  return (
    <div className={cls.headerMobileContacts}>
      <ContactElement img={phoneImage} alt="phone" contactInfo={phone} />
    </div>
  );
};
