// ui
import { NavButton } from '@/shared/ui/NavButton';
// model
import { navList } from '../../model/navList';
// styles
import cls from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <ul className={cls.navList}>
        {navList.map((item, index) => {
          return (
            <li key={index} className={cls.navItem}>
              <NavButton>{item.name}</NavButton>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
