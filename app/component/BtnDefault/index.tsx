import classNames from "classnames";
import { FC, useEffect } from "react";
import styles from "./styles.module.scss";

enum BtnType {"submit", "reset", "button"}
enum BtnSize {"small", "middle", "large"}

interface IBtnDefault {
  text: string,
  size?: keyof typeof BtnSize,
  type?: keyof typeof BtnType,
}

const BtnDefault: FC<IBtnDefault> = ({text, type = "button", size = "middle"}) => {

  const btnSize = classNames({
    "btn-default--small": size === "small",
    "btn-default--middle": size === "middle",
    "btn-default--large": size === "large",
  });

  return (
  <button 
    className={`${styles["btn-default"]} ${styles[btnSize]}`}
    type={type}
  >{text}</button>
  )
};

export default BtnDefault;