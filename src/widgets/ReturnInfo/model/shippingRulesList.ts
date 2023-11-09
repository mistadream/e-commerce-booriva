// images
import return1 from '../assets/svg/return_1.svg';
import return2 from '../assets/svg/return_2.svg';
import return3 from '../assets/svg/return_3.svg';
import return4 from '../assets/svg/return_4.svg';

interface ReturnInfoList {
  img: string;
  text: string;
  alt: string;
}

export const returnInfoList: ReturnInfoList[] = [
  {
    img: return1,
    text: `Вы легко можете обменять либо 
    вернуть вещь в течение 14 дней после 
    покупки, если вещь не была в носке и
    не стиралась. Для этого свяжитесь с
    нами любым удобным способом.`,
    alt: 'return image',
  },
  {
    img: return2,
    text: `Вещи, которые вы отправляете нам,
    мы забираем с почты 2 раза в неделю.`,
    alt: 'return image',
  },
  {
    img: return3,
    text: `При обмене, мы отправляем вещь 
    в тот же либо на следующий день, 
    после того как забрали вещь с почты.`,
    alt: 'return image',
  },
  {
    img: return4,
    text: `При возврате, деньги возвращаются
    в течение 5 рабочих дней, после того
    как забрали вещь с почты и получили
    реквизиты для возврата.`,
    alt: 'return image',
  },
];
