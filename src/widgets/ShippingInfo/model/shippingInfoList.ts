// images
import shippingIcon from '../assets/svg/icon_send.svg';
import changeIcon from '../assets/svg/icon_change.svg';
import madeIcon from '../assets/svg/icon_made.svg';

interface ShippingInfoList {
  img: string;
  titleFirstLine: string;
  titleSecondLine: string;
  description: string;
  alt: string;
}

export const shippingInfoList: ShippingInfoList[] = [
  {
    img: shippingIcon,
    titleFirstLine: 'Отправка',
    titleSecondLine: 'день в день',
    description: 'При заказе до 18:00',
    alt: 'shipping icon',
  },
  {
    img: changeIcon,
    titleFirstLine: 'Легкий',
    titleSecondLine: 'возврат/обмен',
    description: 'В течении 14 дней',
    alt: 'change icon',
  },
  {
    img: madeIcon,
    titleFirstLine: 'Сделано',
    titleSecondLine: 'в Украине',
    description: 'Прям в Киеве',
    alt: 'made icon',
  },
];
