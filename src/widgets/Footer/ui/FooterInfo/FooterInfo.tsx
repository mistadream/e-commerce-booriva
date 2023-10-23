// ui
import { NavButton } from '@/shared/ui/NavButton';
import { FooterInfoBlockTitle } from '../FooterInfoBlockTitle';
// styles
import cls from './FooterInfo.module.scss';

export const FooterInfo = () => {
  return (
    <div className={cls.footerInfo}>
      <FooterInfoBlockTitle>ИНФО</FooterInfoBlockTitle>
      <ul className={cls.infoList}>
        <li className={cls.listItem}>
          <NavButton>Контакты</NavButton>
        </li>
        <li className={cls.listItem}>
          <NavButton>Система лояльности</NavButton>
        </li>
        <li className={cls.listItem}>
          <NavButton>Обмен и возврат</NavButton>
        </li>
        <li className={cls.listItem}>
          <NavButton>Доставка и оплата</NavButton>
        </li>
      </ul>
    </div>
  );
};
