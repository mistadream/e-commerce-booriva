import { v4 as uuidv4 } from 'uuid';

interface LinkItem {
  name: string;
  id: string;
}

export const linkList: LinkItem[] = [
  {
    name: 'Контакты',
    id: uuidv4(),
  },
  {
    name: 'Система лояльности',
    id: uuidv4(),
  },
  {
    name: 'Обмен и возврат',
    id: uuidv4(),
  },
  {
    name: 'Доставка и оплата',
    id: uuidv4(),
  },
];
