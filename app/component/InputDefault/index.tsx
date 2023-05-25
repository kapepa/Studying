import React, {FC} from "react";
import styles from "./styles.module.scss";
import {UseFormRegister, Path} from "react-hook-form";
import {PaymentInterface} from "../../interface/PaymentInterface";
import {FieldErrors} from "react-hook-form/dist/types/errors";

type InputType = "email" | "text" | "password" | "search";

interface InputDefaultInterface {
  id: string,
  type: InputType,
  title: string,
  errors: FieldErrors<PaymentInterface>,
  label: Path<PaymentInterface>,
  register: UseFormRegister<PaymentInterface>,
  required?: string,
  minLength?: { value: number, message: string },
  maxLength?: { value: number, message: string },
  isChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputDefault: FC<InputDefaultInterface> = (
  {id, type, title, isChange, label, register, required, errors, minLength, maxLength,  }
) => {

  return <div className={styles['input-def']}>
    <label className={styles['input-def__label']} htmlFor={id}>{title}</label>
    <input
      id={id}
      type={type}
      maxLength={maxLength.value}
      className={styles['input-def__input']}
      {...register(label, { required, minLength, maxLength, onChange: isChange })}
    />
    { errors[label]?.type === 'required' && <span className={styles['input-def__alert']} role="alert">{`${label} is required`}</span> }
    { (!!minLength && errors[label]?.type === 'minLength') && <span className={styles['input-def__alert']} role="alert">{minLength.message}</span> }
    { (!!maxLength && errors[label]?.type === 'maxLength') && <span className={styles['input-def__alert']} role="alert">{maxLength.message}</span> }
  </div>
}

export default InputDefault;