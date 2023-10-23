// ui
import { Navbar } from '../Navbar';
import { HeaderContacts } from '../HeaderContacts';
import { Logo } from '@/shared/ui/Logo';
import { HeaderMenu } from '../HeaderMenu';

//styles
import cls from './Header.module.scss';
import { HeaderContactMobile } from '../HeaderContactMobile';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.headerContainer}>
        <div className={cls.headerRow}>
          <HeaderContacts />
          <Logo header={true} />
          <HeaderContactMobile />
          <HeaderMenu />
        </div>
        <Navbar />
      </div>
    </header>
  );
};
