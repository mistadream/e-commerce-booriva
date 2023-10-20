// ui
import { IconButton } from '@/shared/ui/IconButton';
import { LinkButton } from '@/shared/ui/LinkButton';
//styles
import cls from './Header.module.scss';
//imgs
import cart from './img/cart.svg';
import logo from './img/logo.svg';
import wishlist from './img/wishlist.svg';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.headerContainer}>
        <div className={cls.headerTitle}>
          <div className={cls.headerInfo}>
            <a href="#" className={cls.headerAdress}>
              Киев, Нижний вал, 37
            </a>
            <a href="#" className={cls.headerPhone}>
              +38 063 843 34 71
            </a>
          </div>
          <div className={cls.headerLogoContainer}>
            <a className={cls.headerLogo} href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className={cls.headerFeatures}>
            {/* TODO Create feature search and add instead of search button*/}
            <button className={cls.headerSearch}>Поиск</button>{' '}
            <div className={cls.headerButtons}>
              <IconButton img={wishlist} altValue={'Wishlist'} />
              <IconButton img={cart} altValue={'Cart'} />
            </div>
          </div>
        </div>
        <nav className={cls.headerCategories}>
          <ul className={cls.categoriesList}>
            <li className={cls.categoryItem}>
              <LinkButton>Новинки</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>Платья</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>Верх</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>Низ</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>Куртки</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>Мелочи</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>Костюмы</LinkButton>
            </li>
            <li className={cls.categoryItem}>
              <LinkButton>#Boorivagirls</LinkButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
