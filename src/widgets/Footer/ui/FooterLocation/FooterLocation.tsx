// styles
import { FooterInfoBlockTitle } from '../FooterInfoBlockTitle';
import cls from './FooterLocation.module.scss';

export const FooterLocation = () => {
  return (
    <div className={cls.footerLocation}>
      <FooterInfoBlockTitle>НАШ АДРЕС</FooterInfoBlockTitle>
      <ul className={cls.locarionList}>
        <li className={cls.listItem}>г.Киев, ул. Нижний Вал, 37</li>
        <li className={cls.listItem}>Пн — Вс: с 11:00 до 21:00</li>
      </ul>
    </div>
  );
};
