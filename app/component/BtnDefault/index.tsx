import classNames from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

enum BtnType {"submit", "reset", "button"}
enum BtnSize {"small", "middle", "large"}
enum ShapeType {"circle", "rounding"}
enum BgColor {"default", "red" , "blue", "light-blue", "green", "light-green", "transparent", "transparent-green"}

interface IBtnDefault {
  disabled?: boolean,
  href?: string,
  text: string,
  bg?: keyof typeof BgColor,
  size?: keyof typeof BtnSize,
  type?: keyof typeof BtnType,
  shape?: keyof typeof ShapeType,
  click?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void,
}

const BtnDefault: FC<IBtnDefault> = ({text, type = "button", size = "middle", bg = "default", click, href, disabled= false, shape = "circle"}) => {
  const btnBg = classNames({
    "btn-default__bg--def": !bg || bg === "default",
    "btn-default__bg--red": bg === "red",
    "btn-default__bg--blue": bg === "blue",
    "btn-default__bg--blue-light": bg === "light-blue",
    "btn-default__bg--green": bg === "green",
    "btn-default__bg--light-green": bg === "light-green",
    "btn-default__bg--transparent": bg === "transparent",
    "btn-default__bg--transparent-green": bg === "transparent-green",
  });
  const btnSize = classNames({
    "btn-default--small": size === "small",
    "btn-default--middle": size === "middle",
    "btn-default--large": size === "large",
  });
  const shapeType = classNames({
    "btn-default__shape--circle": shape === "circle",
    "btn-default__shape--rounding": shape === "rounding",
  })

  const button = () => <button
    onClick={click}
    className={`${styles["btn-default"]} ${styles[shapeType]} ${styles[btnSize]} ${styles[btnBg]}`}
    type={type}
    disabled={disabled}
  >{text}</button>

  const link = () => <Link
    href={href}
    onClick={click}
    className={`${styles["btn-default"]} ${styles[shapeType]} ${styles[btnSize]} ${styles[btnBg]}`}
  >{text}</Link>

  return (!!href ? link : button)();
};

export default BtnDefault;