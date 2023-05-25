import React, {FC, useEffect, useRef, useState} from "react";
import style from "./style.module.scss";
import {useForm} from "react-hook-form";
import BtnDefault from "../../component/BtnDefault";
import classNames from "classnames";
import {nameType, PaymentInterface} from "../../interface/PaymentInterface";
import InputDefault from "../../component/InputDefault";
import {types} from "sass";

interface RadioPaymentInterface{
  value: string,
  name: string,
  src: string,
  checked: boolean,
  change: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Acquisition: FC = () => {
  const [payment, setPayment] = useState<PaymentInterface>({ name: "paypal", number: null, date: undefined, cvc: null })
  const { register, control, handleSubmit, formState: { errors } } = useForm<PaymentInterface>({
    defaultValues: { name: "paypal", number: null, date: undefined, cvc: null  }
  });

  const inputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    const sortNumber = value.split('').filter((letter) => !isNaN(Number(letter)));

    if(sortNumber.length >= 4) sortNumber.splice(4, 0, '-');
    if(sortNumber.length >= 9) sortNumber.splice(9, 0, '-');
    if(sortNumber.length >= 14) sortNumber.splice(14, 0, '-');

    e.currentTarget.value = sortNumber.join('')
  }

  const inputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letter: string = e.key;
    const length: number = letter.length;
    const value: string = e.currentTarget.value;
    const isNumber: boolean = isNaN(Number(letter));

    if (length === 1 && isNumber) e.preventDefault();
    if (length === 1 && !isNumber){
      const space = value.split("").filter(sign => sign !== '/');
      e.preventDefault();

      if(value.length <= 4) {
        e.currentTarget.value = `${e.currentTarget.value}${ space.length> 0 && space.length % 2 === 0 ? '/' : '' }${letter}`
      }
    }
  }

  const inputCVC = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const letter: string = e.key;
    const length: number = letter.length;
    const value: string = e.currentTarget.value;
    const isNumber: boolean = isNaN(Number(letter));

    if (length === 1 && isNumber) e.preventDefault();
    if (length === 1 && !isNumber){
      e.preventDefault();

      if(value.length <= 2) {
        e.currentTarget.value = `${e.currentTarget.value}${letter}`;
      }
    }
  }

  const changePayment = (e: React.ChangeEvent<HTMLInputElement>) => setPayment({...payment, name: e.currentTarget.value as nameType});

  const onSubmit = (data) => console.log(data)

  const RadioPayment: FC<RadioPaymentInterface> = ({src, value, name, change, checked}) => {
    const refInput = useRef<HTMLInputElement>()
    const checkedClass = classNames({ [style["radio-pay__image--checked"]] : checked});
    const onClickPay = (e: React.MouseEvent<HTMLDivElement>) => refInput.current.click();

    return <div onClick={onClickPay} className={`${style['radio-pay']}`}>
      <img className={`${style['radio-pay__image']} ${checkedClass}`} src={src} alt={"payment"} />
      <input
        className={`${style['radio-pay__input']}`}
        onChange={change}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        ref={refInput}
      />
    </div>
  }

  return <section className={style.acquisition}>
    <form className={style.acquisition__form} onSubmit={handleSubmit(onSubmit)}>
      <h5 className={style.acquisition__h}>Checkout</h5>
      <span className={style.acquisition__subtitle}>Cart Type</span>
      <div className={style['acquisition__payment-way']}>
        <RadioPayment
          change={changePayment}
          name={"payment"}
          checked={payment.name === "paypal"}
          value={"paypal"}
          src={"/svg/paypal.svg"}
        />
        <RadioPayment
          change={changePayment}
          name={"payment"}
          checked={payment.name === "american express"}
          value={"american express"}
          src={"/svg/american express.svg"}
        />
        <RadioPayment
          change={changePayment}
          name={"payment"}
          checked={payment.name === "visa"}
          value={"visa"}
          src={"/svg/visa.svg"}
        />
        <RadioPayment
          change={changePayment}
          name={"payment"}
          checked={payment.name === "mastercard"}
          value={"mastercard"}
          src={"/svg/mastercard.svg"}
        />
      </div>
      <InputDefault
        id={'number'}
        label={'number'}
        type={'text'}
        title={'Card Number'}
        errors={errors}
        register={register}
        isChange={inputNumber}
        required={'number card is required'}
        minLength={{value: 19, message: 'this card number is short'}}
        maxLength={{value: 19, message: 'this card number is long'}}
      />
      <div>
        <InputDefault
          id={'date'}
          label={'date'}
          type={'text'}
          title={'Expiration Date ( MM/YY )'}
          errors={errors}
          register={register}
          isChange={inputDate}
          required={'date is required'}
          minLength={{value: 5, message: 'this number card is short'}}
          maxLength={{value: 5, message: 'this date number is long'}}
        />
        {/*<InputDefault*/}
        {/*  id={'cvc'}*/}
        {/*  label={'cvc'}*/}
        {/*  type={'text'}*/}
        {/*  title={'CVC'}*/}
        {/*  errors={errors}*/}
        {/*  register={register}*/}
        {/*  isKeyDown={inputCVC}*/}
        {/*  required={'cvc is required'}*/}
        {/*  minLength={{value: 3, message: 'this cvc is short'}}*/}
        {/*/>*/}
      </div>
      <BtnDefault text={"Confirm Payment"} shape={"rounding"} type={"submit"} bg={"light-green"}/>
    </form>
    <div className={style.acquisition__summary}>

    </div>
  </section>
}

export default Acquisition