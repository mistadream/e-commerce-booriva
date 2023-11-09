// react
import { FC, memo } from 'react';

// styles
import cls from './RadioButton.module.scss';

interface radioButtonProps {
  id: string;
  name: string;
  value: string;
  deliveryDescription: string;
  deliveryCost: string;
  checked?: boolean;
}

export const RadioButton: FC<radioButtonProps> = memo(
  ({ id, name, value, deliveryDescription, deliveryCost, checked }) => {
    return (
      <div className={cls.radioContainer}>
        <input
          className={cls.radioButton}
          defaultChecked={checked}
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
  }
);
