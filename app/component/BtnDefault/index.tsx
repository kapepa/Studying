import classNames from "classnames";
import { FC, useEffect } from "react";
import styles from "./styles.module.scss";

enum BtnType {"submit", "reset", "button"}
enum BtnSize {"small", "middle", "large"}
enum BgColor {"default", "red", "transparent"}

interface IBtnDefault {
  text: string,
  bg?: keyof typeof BgColor,
  size?: keyof typeof BtnSize,
  type?: keyof typeof BtnType,
  click?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const BtnDefault: FC<IBtnDefault> = ({text, type = "button", size = "middle", bg = "default", click}) => {
  const btnBg = classNames({
    "btn-default__bg--def": !bg || bg === "default",
    "btn-default__bg--red": bg === "red",
    "btn-default__bg--transparent": bg === "transparent",
  });
  const btnSize = classNames({
    "btn-default--small": size === "small",
    "btn-default--middle": size === "middle",
    "btn-default--large": size === "large",
  });

  return (
  <button
    onClick={click}
    className={`${styles["btn-default"]} ${styles[btnSize]} ${styles[btnBg]}`}
    type={type}
  >{text}</button>
  )
};

export default BtnDefault;