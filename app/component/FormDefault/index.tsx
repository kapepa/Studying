import {FC} from "react";
import style from "./style.module.scss";
import {useForm} from "react-hook-form";

enum descInputEnum {
  text, password, email
}

type inputType = {
  label: string,
  name: string,
  type: keyof typeof descInputEnum,
}

interface FormDefaultInterface{
  title: string,
  inputs: inputType[]
}

const FormDefault: FC<FormDefaultInterface> = ({title, inputs}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return <div className={style['form-default']}>
    <h5 className={style['form-default__title']}>{title}</h5>
    <form className={style['form-default__form']} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(((input: inputType, index: number) => <div key={`${input.name}-${index}`} className={style['form-default__cell']}>
        <label className={style['form-default__label']} htmlFor={input.name}>{input.label}</label>
        <input
          className={style['form-default__input']}
          id={input.name}
          type={input.type}
          name={input.name}
          {...register(input.name, { required: true, maxLength: 30 })}
        />
      </div>))}

    </form>
  </div>
}

export default FormDefault;