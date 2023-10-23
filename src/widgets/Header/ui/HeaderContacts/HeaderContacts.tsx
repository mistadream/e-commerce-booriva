// styles
import cls from './HeaderContacts.module.scss';

export const HeaderContacts = () => {
  return (
    <div className={cls.headerСontacts}>
      <a href="#" className={cls.headerAdress}>
        Киев, Нижний вал, 37
      </a>
      <a href="#" className={cls.headerPhone}>
        +38 063 843 34 71
      </a>
    </div>
  );
};
