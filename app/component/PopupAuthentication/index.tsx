import React, {FC, useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import FormDefault from "../FormDefault";

type typeMode = 'login' | 'register';

const PopupAuthentication: FC = () => {
  const emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [mode, setMode] = useState<typeMode>('login');
  const onChangeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMode((e.currentTarget.name as typeMode));
  }

  return <div className={style['popup-authentication']}>
    <div className={style['popup-authentication__window']}>
      <h5 className={style['popup-authentication__h']}>Welcome</h5>
      <div className={style['popup-authentication__toggle']}>
        <button
          onClick={onChangeMode}
          className={`${style['popup-authentication__mode']} ${classNames({[style['popup-authentication__mode--active']]: mode === 'login'})}`}
          name={'login'}>Login</button>
        <button
          onClick={onChangeMode}
          className={`${style['popup-authentication__mode']} ${classNames({[style['popup-authentication__mode--active']]: mode === 'register'})}`}
          name={'register'}>Register</button>
      </div>
      <FormDefault title={"Login"} inputs={[
        // {name: "name", type: "text", label: "User name", patterns: { required: { message: "Required", value: true }, minLength: {message: 'Min length', value: 5} }},
        {name: "email", type: "email", label: "Email", patterns: { required: { message: "Required", value: true }, email: {pattern: {message: "Invalid email address", value: emailRegExp}} }},
      ]}/>
    </div>
  </div>
}

export default PopupAuthentication;