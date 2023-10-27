// ui
import { IconButton } from '@/shared/ui/IconButton';
// styles
import cls from './HeaderMenu.module.scss';
// svg
import wishlist from '../../assets/svg/wishlist.svg';
import cart from '../../assets/svg/cart.svg';

export const HeaderMenu = () => {
  return (
    <div className={cls.headerMenu}>
      {/* TODO Create feature search and add instead of search button*/}
      <button className={cls.search} aria-label="Search items">
        <span className={cls.searchText}>Поиск</span>
      </button>
      <div className={cls.headerButtons}>
        <IconButton variant="header" img={wishlist} altValue={'Wishlist'} />
        <IconButton variant="header" img={cart} altValue={'Cart'} />
      </div>
    </div>
  );
};
