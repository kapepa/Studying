import React, {FC, useState} from "react";
import style from "./style.module.scss";
import Link from "next/link";
import BtnDefault from "../../component/BtnDefault";

const Footer: FC = () => {
  const [input, setInput] = useState<string>('')

  const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => setInput(e.currentTarget.value);

 const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input)
 }

  return <footer className={style.footer}>
    <Link className={style.footer__link} href={'/home'}>
      <img className={style.footer__logo} src={'/svg/logo.svg'} alt='logo'/>
      <h5 className={style.footer__h}>Virtual Class for Zoom</h5>
    </Link>
    <div className={style.footer__subscribe}>
      <h5 className={style.footer__subtitle}>Subscribe to get our Newsletter</h5>
      <form className={style.footer__form} onSubmit={onSubmit}>
        <input defaultValue={'Your Email'} className={style.footer__input} name={'email'} type={'email'} onInput={onInput}/>
        <BtnDefault type={'submit'} text={'Subscribe'} disabled={!input} size={'small'} bg={'light-green'}/>
      </form>
    </div>
    <nav className={style.footer__nav}>
      <Link className={style['footer__nav-link']} href={'/'}>Careers</Link>
      <Link className={style['footer__nav-link']} href={'/'}>Privacy Policy</Link>
      <Link className={style['footer__nav-link']} href={'/'}>Terms & Conditions</Link>
    </nav>
    <span className={style.footer__protected}>© 2021 Class Technologies Inc.</span>
  </footer>
}

export default Footer;