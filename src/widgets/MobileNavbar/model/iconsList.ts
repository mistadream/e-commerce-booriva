// images
import menu from '../assets/svg/menu.svg';
import write from '../assets/svg/telegram.svg';
import cart from '../assets/svg/cart.svg';
import wishlist from '../assets/svg/wishlist.svg';

interface iconsList {
  img: string;
  text: string;
  altValue: string;
}

export const iconsList: iconsList[] = [
  {
    img: menu,
    text: 'Меню',
    altValue: 'Menu',
  },
  {
    img: write,
    text: 'Написать',
    altValue: 'Write',
  },
  {
    img: cart,
    text: 'Корзина',
    altValue: 'Cart',
  },
  {
    img: wishlist,
    text: 'Wish list',
    altValue: 'Wishlist',
  },
];
