import React, {FC} from "react";
import styles from "./styles.module.scss";
import {UseFormRegister, Path} from "react-hook-form";
import {PaymentInterface} from "../../interface/PaymentInterface";

type InputType = "email" | "text" | "password" | "search";

type InputProps = {
  label: Path<PaymentInterface>;
  register: UseFormRegister<PaymentInterface>;
  required: boolean;
};

interface InputDefaultInterface {
  id: string,
  title: string,
  type: InputType,
  register: InputProps
  isKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

const InputDefault: FC<InputDefaultInterface> = ({id,type, isKeyDown,  label, register, required }) => {
  return <div className={styles['input-def']}>
    <label htmlFor={id}>Card Number</label>
    <input
      id={id}
      type={type}
      onKeyDown={isKeyDown ? isKeyDown : () => {} }
      {...register('number', { required: true, maxLength: 19})}
    />
    {errors.number && <p>Number is required.</p>}
  </div>
}

export default InputDefault;