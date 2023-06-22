import React, {FC, useEffect, useState} from "react";
import styles from "./styles.module.scss"

interface InputSearchInterface {
  cd: (search: string) => void,
  toSearch: string
}

const InputSearch: FC<InputSearchInterface> = ({cd, toSearch}) => {
  const [input, setInput] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    e.currentTarget.focus()
  }

  const onSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cd(input);
    setInput('')
  }

  useEffect(() => {
    if(!!toSearch) setInput(toSearch);
  },[toSearch])

  return <div className={styles['input-search']}>
    <input
      onChange={onChange}
      className={styles['input-search__input']}
      type={"text"}
      name={"search"}
      autoFocus={true}
      placeholder={"Search your favourite course"}
      defaultValue={input || toSearch}
      key={input || toSearch}
      role="input"
    />
    <button
      onClick={onSearch}
      className={styles['input-search__btn']}
      type={"button"}
      role="button"
    >Search</button>
  </div>
}

export default InputSearch;