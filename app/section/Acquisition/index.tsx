import React, {FC, useRef, useState} from "react";
import style from "./style.module.scss";
import {useForm} from "react-hook-form";
import BtnDefault from "../../component/BtnDefault";
import classNames from "classnames";
import {nameType, PaymentInterface} from "../../interface/PaymentInterface";

interface RadioPaymentInterface{
  value: string,
  name: string,
  src: string,
  checked: boolean,
  change: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Acquisition: FC = () => {
  const [payment, setPayment] = useState<PaymentInterface>({ cvc: 0, date: undefined, number: '', name: "paypal" })
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      number: null,
      date: null,
      cvc: null
    }
  });
  const inputNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const letter: string = e.key;
    const length: number = letter.length;
    const value: string = e.currentTarget.value;
    const isNumber: boolean = isNaN(Number(letter));

    if (length === 1 && isNumber) e.preventDefault();
    if (length === 1 && !isNumber){
      const space = value.split("").filter(sign => sign !== '-');
      e.preventDefault();

      if(value.length <= 18) {
        e.currentTarget.value = `${e.currentTarget.value}${ space.length> 0 && space.length % 4 === 0 ? '-' : '' }${letter}`
      }
    }
  }
  const inputDate = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
        <RadioPayment change={changePayment} name={"payment"} checked={payment.name === "paypal"} value={"paypal"} src={"/svg/paypal.svg"}/>
        <RadioPayment change={changePayment} name={"payment"} checked={payment.name === "american express"} value={"american express"} src={"/svg/american express.svg"}/>
        <RadioPayment change={changePayment} name={"payment"} checked={payment.name === "visa"} value={"visa"} src={"/svg/visa.svg"}/>
        <RadioPayment change={changePayment} name={"payment"} checked={payment.name === "mastercard"} value={"mastercard"} src={"/svg/mastercard.svg"}/>
      </div>
      <div>
        <label htmlFor={"number"}>Card Number</label>
        <input id={"number"} onKeyDown={inputNumber} {...register('number', { required: true, maxLength: 19})} />
        {errors.number && <p>Number is required.</p>}
      </div>
      <div>
        <div>
          <label htmlFor={"date"}>Expiration Date ( MM/YY )</label>
          <input id={"date"} onKeyDown={inputDate} {...register('date', { pattern: /\d+/ })} />
          {errors.date && <p>Please enter date.</p>}
        </div>
        <div>
          <label htmlFor={"cvc"}>CVC</label>
          <input id={"cvc"} {...register('cvc', { required: true, maxLength: 3, pattern: /\d+/ })} />
          {errors.cvc && <p>Please enter cvc.</p>}
        </div>
      </div>
      <BtnDefault text={"Confirm Payment"} shape={"rounding"} type={"submit"} bg={"light-green"}/>
    </form>
    <div className={style.acquisition__summary}>

    </div>
  </section>
}

export default Acquisition