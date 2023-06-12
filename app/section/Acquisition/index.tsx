import React, {FC, useRef, useState} from "react";
import style from "./style.module.scss";
import {useForm} from "react-hook-form";
import BtnDefault from "../../component/BtnDefault";
import classNames from "classnames";
import {nameType, PaymentInterface} from "../../interface/PaymentInterface";
import InputDefault from "../../component/InputDefault";

interface RadioPaymentInterface{
  value: string,
  name: string,
  src: string,
  checked: boolean,
  change: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Acquisition: FC = () => {
  const [payment, setPayment] = useState<PaymentInterface>({ name: "paypal", number: null, date: undefined, cvc: null })
  const { register, reset, handleSubmit, formState: { errors } } = useForm<PaymentInterface>({
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
    const value: string = e.currentTarget.value;
    const sortNumber = value.split('').filter((letter) => !isNaN(Number(letter)));

    if(sortNumber.length >= 2) sortNumber.splice(2, 0, '/')

    e.currentTarget.value = sortNumber.join('')
  }

  const changePayment = (e: React.ChangeEvent<HTMLInputElement>) => setPayment({...payment, name: e.currentTarget.value as nameType});

  const onSubmit = async (data, e: React.FormEvent<HTMLFormElement>) => {
    reset();
    (e.target as HTMLFormElement).reset();
  }

  const RadioPayment: FC<RadioPaymentInterface> = ({src, value, name, change, checked}) => {
    const refInput = useRef<HTMLInputElement>()
    const checkedClass = classNames({ [style["radio-pay__image--checked"]] : checked});
    const onClickPay = (e: React.MouseEvent<HTMLDivElement>) => refInput.current.click();

    return <div onClick={onClickPay} className={`${style['radio-pay']}`}>
      <img className={`${style['radio-pay__image']} ${checkedClass}`} src={src} alt={value} />
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
    <form role="form" className={style.acquisition__form} onSubmit={handleSubmit(onSubmit)}>
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
      <div className={style.acquisition__requisites}>
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
        <InputDefault
          id={'cvc'}
          label={'cvc'}
          type={'text'}
          title={'CVC'}
          errors={errors}
          register={register}
          required={'cvc is required'}
          minLength={{value: 3, message: 'this cvc is short'}}
          maxLength={{value: 3, message: 'this cvc is long'}}
        />
      </div>
      <BtnDefault text={"Confirm Payment"} shape={"rounding"} type={"submit"} bg={"light-green"} classAddition={style['acquisition__btn-confirm']}/>
    </form>
    <div className={`${style.acquisition__summary} ${style['acq-summary']}`}>
      <h5 className={style['acq-summary__h']}>Summary</h5>
      <div className={style['acq-summary__purchase']}>

        <div className={style['acq-summary__cell']}>
          <img className={style['acq-summary__picture']} src={"/image/classroom.png"} alt={'img'}/>
          <div className={style['acq-summary__more']}>
            <h6 className={style['acq-summary__title']}>adipising elit, sed do eiusmod tempor</h6>
            <span className={style['acq-summary__subtitle']}>Lorem ipsum dollar...</span>
            <span className={style['acq-summary__cost']}>$24.69</span>
          </div>
        </div>

        <div className={style['acq-summary__cell']}>
          <img className={style['acq-summary__picture']} src={"/image/classroom.png"} alt={'img'}/>
          <div className={style['acq-summary__more']}>
            <h6 className={style['acq-summary__title']}>adipising elit, sed do eiusmod tempor</h6>
            <span className={style['acq-summary__subtitle']}>Lorem ipsum dollar...</span>
            <span className={style['acq-summary__cost']}>$24.69</span>
          </div>
        </div>

      </div>
      <div className={style['acq-summary__template']}>
        <span className={style['acq-summary__def']}>Subtotal</span>
        <span className={style['acq-summary__def']}>$51.38</span>
      </div>
      <div className={style['acq-summary__template']}>
        <span className={style['acq-summary__def']}>Coupon Discount</span>
        <span className={style['acq-summary__def']}>0 %</span>
      </div>
      <div className={style['acq-summary__template']}>
        <span className={style['acq-summary__def']}>TAX</span>
        <span className={style['acq-summary__def']}>5</span>
      </div>
      <div className={style['acq-summary__template']}>
        <span className={`${style['acq-summary__def']} ${style['acq-summary__def--black']}`}>Total</span>
        <span className={`${style['acq-summary__def']} ${style['acq-summary__def--black']}`}>$56.38</span>
      </div>
    </div>
  </section>
}

export default Acquisition