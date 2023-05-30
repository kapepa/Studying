import React, {FC, useState} from "react";
import styles from "./styles.module.scss"

interface InputSearchInterface {
  cd: (search: string) => void
}

const InputSearch: FC<InputSearchInterface> = ({cd}) => {
  const [input, setInput] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  }

  const onSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cd(input);
    setInput('')
  }

  return <div className={styles['input-search']}>
    <input onChange={onChange} className={styles['input-search__input']} type={"text"} name={"search"} placeholder={"Search your favourite course"} />
    <button onClick={onSearch} className={styles['input-search__btn']} type={"button"}>Search</button>
  </div>
}

export default InputSearch;