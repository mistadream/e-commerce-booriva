// hooks
import { useGlobalContext } from '@/shared/hooks/useGlobalContext';
// ui
import { ContactElement } from '@/shared/ui/ContactElement';
// styles
import cls from './HeaderContacts.module.scss';
// images
import locationImg from '../../assets/svg/location.svg';
import phoneImg from '../../assets/svg/phone.svg';

export const HeaderContacts = () => {
  const { phone, adress } = useGlobalContext();

  return (
    <div className={cls.headerСontacts}>
      <ContactElement img={locationImg} alt="adress" contactInfo={adress} />
      <ContactElement img={phoneImg} alt="phone" contactInfo={phone} />
    </div>
  );
};
