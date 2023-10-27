import { v4 as uuidv4 } from 'uuid';

interface NavItem {
  name: string;
  id: string;
}

export const navList: NavItem[] = [
  {
    name: 'Новинки',
    id: uuidv4(),
  },
  {
    name: 'Платья',
    id: uuidv4(),
  },
  {
    name: 'Верх',
    id: uuidv4(),
  },
  {
    name: 'Низ',
    id: uuidv4(),
  },
  {
    name: 'Куртки',
    id: uuidv4(),
  },
  {
    name: 'Мелочи',
    id: uuidv4(),
  },
  {
    name: 'Костюмы',
    id: uuidv4(),
  },
  {
    name: '#Boorivagirls',
    id: uuidv4(),
  },
];
