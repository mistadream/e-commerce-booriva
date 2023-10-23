// react
// import { NavLink } from 'react-router-dom';
// styles
import cls from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <ul className={cls.navList}>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Новинки</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Платья</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Верх</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Низ</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Куртки</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Мелочи</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>Костюмы</button>
        </li>
        <li className={cls.navItem}>
          <button className={cls.itemLink}>#Boorivagirls</button>
        </li>
      </ul>
    </nav>
  );
};
