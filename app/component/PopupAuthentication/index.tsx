import React, {FC, useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import FormDefault from "../FormDefault";

type typeMode = 'login' | 'register';

const PopupAuthentication: FC = () => {
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
      <FormDefault title={"Login"} inputs={[{name: "name", type: "text", label: "User name"}]}/>
    </div>
  </div>
}

export default PopupAuthentication;