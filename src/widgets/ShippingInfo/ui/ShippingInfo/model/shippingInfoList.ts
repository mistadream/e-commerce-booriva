// libs
import { v4 as uuidv4 } from 'uuid';
// images
import shippingIcon from '../../../assets/svg/icon_send.svg';
import changeIcon from '../../../assets/svg/icon_change.svg';
import madeIcon from '../../../assets/svg/icon_made.svg';

interface ShippingInfoList {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  alt: string;
  id: string;
}

export const shippingInfoList: ShippingInfoList[] = [
  {
    img: shippingIcon,
    title: 'Отправка',
    subtitle: 'день в день',
    description: 'При заказе до 18:00',
    alt: 'shipping icon',
    id: uuidv4(),
  },
  {
    img: changeIcon,
    title: 'Легкий',
    subtitle: 'возврат/обмен',
    description: 'В течении 14 дней',
    alt: 'change icon',
    id: uuidv4(),
  },
  {
    img: madeIcon,
    title: 'Сделано',
    subtitle: 'в Украине',
    description: 'Прям в Киеве',
    alt: 'made icon',
    id: uuidv4(),
  },
];
