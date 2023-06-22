import React, {FC, useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import FormDefault from "../FormDefault";
import {InputType} from "../../type/InputType";
import axios from "axios";

type typeMode = 'login' | 'register';

const PopupAuthentication: FC = () => {
  const [mode, setMode] = useState<typeMode>('login');
  const emailRegExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const inputPattern: {[key: string]: InputType} = {
    email: {name: "email", type: "email", label: "Email", placeholder: "Enter your Email Address", patterns: { required: { message: "Required", value: true }, email: {pattern: {message: "Invalid email address", value: emailRegExp}} }},
    name: {name: "name", type: "text", label: "User name", placeholder: "Enter your User name", patterns: { required: { message: "Required", value: true }, minLength: {message: 'Min length', value: 5} }},
    password: {name: "password", type: "password", label: "Password", placeholder: "Enter your Password", patterns: { required: { message: "Required", value: true }, minLength: {message: 'Min length', value: 5} }},
  }
  const onChangeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMode((e.currentTarget.name as typeMode));
  }

  const submit = async (title: string, data: any) => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', {   headers: { 'Content-type': 'application/json; charset=UTF-8' } }).then(() => {
        // console.log(title)
        // console.log(data)
      });
    } catch (e) {
      console.error('Something went to wrong!')
    }
  }

  return <div className={style['popup-authentication']} role={"popup"}>
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
      {mode === "login" && <FormDefault cb={submit} title={"Login"} inputs={[inputPattern.name, inputPattern.password]}/>}
      {mode === "register" && <FormDefault cb={submit} title={"Register"} inputs={[inputPattern.email, inputPattern.name, inputPattern.password]}/>}
    </div>
  </div>
}

export default PopupAuthentication;