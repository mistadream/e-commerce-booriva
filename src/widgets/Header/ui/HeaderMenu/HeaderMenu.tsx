// ui
import { NavIconButton } from '@/shared/ui/NavIconButton';
// styles
import cls from './HeaderMenu.module.scss';
// svg
import wishlist from '../../assets/svg/wishlist.svg';
import cart from '../../assets/svg/cart.svg';

export const HeaderMenu = () => {
  return (
    <div className={cls.headerMenu}>
      {/* TODO Create feature search and add instead of search button*/}
      <button className={cls.search}>
        <span className={cls.searchText}>Поиск</span>
      </button>
      <div className={cls.headerButtons}>
        <NavIconButton img={wishlist} altValue={'Wishlist'} />
        <NavIconButton img={cart} altValue={'Cart'} />
      </div>
    </div>
  );
};
