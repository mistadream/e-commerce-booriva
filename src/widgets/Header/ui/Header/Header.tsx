// ui
import { Navbar } from '../Navbar';
import { HeaderContacts } from '../HeaderContacts';
import { HeaderMenu } from '../HeaderMenu';
import { Logo } from '@/shared/ui/Logo';

// styles
import cls from './Header.module.scss';
import { HeaderContactsMobile } from '../HeaderContacts/mobile';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.headerContainer}>
        <div className={cls.headerRow}>
          <HeaderContacts />
          <Logo variant="header" />
          <HeaderContactsMobile />
          <HeaderMenu />
        </div>
        <Navbar />
      </div>
    </header>
  );
};
