import React, {FC} from "react";
import style from "./style.module.scss";

interface XCloseInterface {
  onCd: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const XClose: FC<XCloseInterface> = ({onCd}) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.currentTarget.classList.contains(style['x-close'])) onCd(e)
  }

  return <button onClick={onClick} className={style['x-close']} name={"close"} role="close"/>
}

export default React.memo(XClose);