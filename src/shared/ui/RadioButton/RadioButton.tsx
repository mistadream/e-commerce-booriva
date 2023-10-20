// react
import { FC } from 'react';

// styles
import cls from './RadioButton.module.scss';

interface radioButton {
  id: string;
  name: string;
  value: string;
  deliveryDescription: string;
  deliveryCost: string;
  checked: boolean;
}

export const RadioButton: FC<radioButton> = ({
  id,
  name,
  value,
  deliveryDescription,
  deliveryCost,
  checked,
}) => {
  return (
    <div className={cls.radioContainer}>
      <input
        defaultChecked={checked}
        className={cls.radioButton}
        id={id}
        type="radio"
        name={name}
        value={value}
      />
      <label className={cls.radioLabel} htmlFor={id}>
        <span className={cls.deliveryDescription}>{deliveryDescription}</span>
        <span className={cls.deliveryCost}>{deliveryCost}</span>
      </label>
    </div>
  );
};
