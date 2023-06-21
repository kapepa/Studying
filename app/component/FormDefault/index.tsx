import {FC} from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import {RegisterOptions, ValidationRule} from "react-hook-form/dist/types/validator";
import {InputType} from "../../type/InputType";

const patterns: PatternsType = {
  required: {
    value: true, message: "This field is required"
  },
  email: {
    pattern: {value: /\S+@\S+\.\S+/, message: "Entered value does not match email format"}
  },
  minLength: {
    value: 5, message: 'Min length exceeded'
  },
  maxLength: {
    value: 20, message: 'Max length exceeded',
  }
}

type SinglePatternsType = {
  value?: ValidationRule<RegExp> | number | boolean,
  message?: string,
}

type CheckPatternsType = {
  pattern: SinglePatternsType,
}

type PatternsType = {
  [key: string]: CheckPatternsType | SinglePatternsType ,
}

interface FormDefaultInterface{
  title: string,
  inputs: InputType[],
  cb: (title: string, data: any) => void,
  submitText?: string,
}

const FormDefault: FC<FormDefaultInterface> = ({title, inputs, cb, submitText= "Submit"}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => cb(title, data);

  const checkPattern = (pattern: string, templates: RegisterOptions): PatternsType  => {
    return Object.keys(templates).reduce((accum, key) => {
      const hasPattern = patterns[key].hasOwnProperty('pattern');
      const merge = Object.assign( patterns[key], templates[key]);
      return {...accum, ...hasPattern ? { pattern: merge.pattern } : { [key]: merge }};
    }, {} as PatternsType)
  }

  return <div className={style['form-default']}>
    <h5 className={style['form-default__title']}>{title}</h5>
    <form className={style['form-default__form']} onSubmit={handleSubmit(onSubmit)}>
      {/*{inputs.map(((input: InputType, index: number) => <div key={`${input.name}-${index}`} className={style['form-default__cell']}>*/}
      {/*  <label className={style['form-default__label']} htmlFor={input.name}>{input.label}</label>*/}
      {/*  <input*/}
      {/*    className={style['form-default__input']}*/}
      {/*    id={input.name}*/}
      {/*    type={input.type}*/}
      {/*    name={input.name}*/}
      {/*    value=""*/}
      {/*    placeholder={input.placeholder}*/}
      {/*    {...register(input.name, { ...checkPattern(input.name, input.patterns) })}*/}
      {/*    role={`input-${index}`}*/}
      {/*  />*/}
      {/*  {errors[input.name] && <span className={style['form-default__alert']} role="error">{ errors[input.name].message?.toString() }</span>}*/}
      {/*</div>))}*/}
      <input role={"input-0"} name="name" value=""/>
      <div className={style['form-default__basement']}>
        <button className={style['form-default__submit']} type="submit">{submitText}</button>
      </div>
    </form>
  </div>
}

export default FormDefault;