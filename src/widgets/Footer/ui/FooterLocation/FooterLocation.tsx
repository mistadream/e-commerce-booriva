// hook
import { useAppContext } from '@/shared/hooks/useAppContext';
// ui
import { LinkButton } from '@/shared/ui/LinkButton';
import { FooterInfoBlockTitle } from '../FooterInfoBlockTitle';
// styles
import cls from './FooterLocation.module.scss';

export const FooterLocation = () => {
  const { adress, phone, workTime } = useAppContext();

  return (
    <div className={cls.footerLocation}>
      <FooterInfoBlockTitle>НАШ АДРЕС</FooterInfoBlockTitle>
      <ul className={cls.infoList}>
        <li className={cls.infoItem}>
          <LinkButton>{adress}</LinkButton>
        </li>
        <li className={cls.infoItem}>
          <span className={cls.info}>{workTime}</span>
        </li>
        <li className={cls.infoItem}>
          <LinkButton>{phone}</LinkButton>
        </li>
      </ul>
    </div>
  );
};
