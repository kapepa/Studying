import classNames from "classnames";
import { FC } from "react";
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
    "default--small": size === "small",
    "default--middle": size === "middle",
    "default--large": size === "large",
  });


  return (
  <button 
    className={`${styles.default} ${btnSize}`}
    type={type}
  >{text}</button>
  )
};

export default BtnDefault;