// hooks
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
// ui
import { IconButton } from '@/shared/ui/IconButton';
// styles
import cls from './HeaderMenu.module.scss';
// svg
import wishlist from '../../assets/svg/wishlist.svg';
import cart from '../../assets/svg/cart.svg';

export const HeaderMenu = () => {
  const buttonRender = useMediaQuery('(min-width: 767.98px)');

  return (
    <div className={cls.headerMenu}>
      {/* TODO Create feature search and add instead of search button*/}
      <button className={cls.search} aria-label="Search items">
        {buttonRender && <span className={cls.searchText}>Поиск</span>}
      </button>
      {buttonRender && (
        <div className={cls.headerButtons}>
          <IconButton variant="header" img={wishlist} altValue={'Wishlist'} />
          <IconButton variant="header" img={cart} altValue={'Cart'} />
        </div>
      )}
    </div>
  );
};
