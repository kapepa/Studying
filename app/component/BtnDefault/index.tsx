import classNames from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

enum BtnType {"submit", "reset", "button"}
enum BtnSize {"small", "middle", "large"}
enum BgColor {"default", "red" , "blue", "green", "transparent"}

interface IBtnDefault {
  href?: string,
  text: string,
  bg?: keyof typeof BgColor,
  size?: keyof typeof BtnSize,
  type?: keyof typeof BtnType,
  click?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
}

const BtnDefault: FC<IBtnDefault> = ({text, type = "button", size = "middle", bg = "default", click, href}) => {
  const btnBg = classNames({
    "btn-default__bg--def": !bg || bg === "default",
    "btn-default__bg--red": bg === "red",
    "btn-default__bg--blue": bg === "blue",
    "btn-default__bg--green": bg === "green",
    "btn-default__bg--transparent": bg === "transparent",
  });
  const btnSize = classNames({
    "btn-default--small": size === "small",
    "btn-default--middle": size === "middle",
    "btn-default--large": size === "large",
  });

  const button = () => <button
    onClick={click}
    className={`${styles["btn-default"]} ${styles[btnSize]} ${styles[btnBg]}`}
    type={type}
  >{text}</button>

  const link = () => <a
    href={href}
    onClick={click}
    className={`${styles["btn-default"]} ${styles[btnSize]} ${styles[btnBg]}`}
  >{text}</a>

  return (!!href ? link : button)();
};

export default BtnDefault;