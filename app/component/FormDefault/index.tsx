import {FC} from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import {RegisterOptions, ValidationRule} from "react-hook-form/dist/types/validator";

enum DescInputEnum {
  text, password, email
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

type InputType = {
  label: string,
  name: string,
  type: keyof typeof DescInputEnum,
  patterns: {
    required?: {
      value: boolean,
      message: string
    },
    minLength?: {
      value: number,
      message: string
    },
    maxLength?: {
      value: number,
      message: string
    },
    email?: {
      pattern: {
        value: RegExp,
        message: string
      }
    }
  }
}

interface FormDefaultInterface{
  title: string,
  inputs: InputType[]
}

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

const FormDefault: FC<FormDefaultInterface> = ({title, inputs}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const checkPattern = (pattern: string, templates: RegisterOptions): PatternsType  => {

    const test = Object.keys(templates).reduce((accum, key) => {
      const hasPattern = patterns[key].hasOwnProperty('pattern');
      return {...accum, [key]: Object.assign( hasPattern ? patterns[key].pattern : patterns[key], hasPattern ?  templates[key].pattern : templates[key]) };
    }, {} as PatternsType)
    console.log(test)

    return test
  }

  return <div className={style['form-default']}>
    <h5 className={style['form-default__title']}>{title}</h5>
    <form className={style['form-default__form']} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(((input: InputType, index: number) => <div key={`${input.name}-${index}`} className={style['form-default__cell']}>
        <label className={style['form-default__label']} htmlFor={input.name}>{input.label}</label>
        <input
          className={style['form-default__input']}
          id={input.name}
          type={input.type}
          name={input.name}
          {...register(input.name, { ...checkPattern(input.name, input.patterns) })}
        />
        {/*{...register(input.name, { ...checkPattern(input.name, input.patterns) })}*/}
        {errors[input.name] && <span className={style['form-default__alert']}>{ errors[input.name].message?.toString() }</span>}
      </div>))}
      <div className={style['form-default__basement']}>
        <button className={style['form-default__submit']} type="submit">{title}</button>
      </div>
    </form>
  </div>
}

export default FormDefault;