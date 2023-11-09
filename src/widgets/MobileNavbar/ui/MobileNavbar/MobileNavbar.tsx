//hooks
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
// ui
import { IconButton } from '@/shared/ui/IconButton';
// model
import { iconsList } from '../../model/iconsList';
// styles
import cls from './MobileNavbar.module.scss';

export const MobileNavbar = () => {
  const navbarRender = useMediaQuery('(max-width: 767.98px)');

  return (
    navbarRender && (
      <div className={cls.mobileNavbar}>
        <div className={cls.navbarContainer}>
          {iconsList.map((icon, index) => {
            return (
              <IconButton
                img={icon.img}
                altValue={icon.altValue}
                variant="mobileNav"
                text={icon.text}
                key={index}
              />
            );
          })}
        </div>
      </div>
    )
  );
};
