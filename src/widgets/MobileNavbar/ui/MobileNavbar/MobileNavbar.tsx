// ui
import { IconButton } from '@/shared/ui/IconButton';
// styles
import cls from './MobileNavbar.module.scss';

// img
import imagess from '../../assets/svg/bag.svg';

export const MobileNavbar = () => {
  return (
    <div className={cls.mobileNavbar}>
      {/* TODO Create array, and map*/}
      <div className={cls.navbarContainer}>
        <IconButton
          img={imagess}
          altValue="bag"
          variant="mobileNav"
          text="Меню"
        />
        <IconButton
          img={imagess}
          altValue="bag"
          variant="mobileNav"
          text="Меню"
        />
        <IconButton
          img={imagess}
          altValue="bag"
          variant="mobileNav"
          text="Меню"
        />
        <IconButton
          img={imagess}
          altValue="bag"
          variant="mobileNav"
          text="Меню"
        />
      </div>
    </div>
  );
};
