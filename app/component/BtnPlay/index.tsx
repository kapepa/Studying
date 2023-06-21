import React, {FC, useState} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface BtnPlayInterface {
  size: number,
  sizeTriangle: "small" | "middle" | "large",
  cb: (b: boolean) => void,
}

const BtnPlay: FC<BtnPlayInterface> = ({size, cb, sizeTriangle}) => {
  const [play, setPlay] = useState<boolean>(true);
  const sizeTriangleClass = classNames({
    'btn-play__triangle--large': sizeTriangle === 'large',
    'btn-play__triangle--middle': sizeTriangle === 'middle',
    'btn-play__triangle--small': sizeTriangle === 'small',
  })
  const sizeRectangleClass = classNames({
    'btn-play__double-rectangle--large': sizeTriangle === 'large',
    'btn-play__double-rectangle--middle': sizeTriangle === 'middle',
    'btn-play__double-rectangle--small': sizeTriangle === 'small',
  })

  const clickPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    let changePlay: boolean = !play;
    cb(changePlay);
    setPlay(changePlay);
  }

  return <button
    onClick={clickPlay}
    className={styles['btn-play']}
    style={{maxHeight: size, maxWidth: size}}
    role="btn"
  >
    {!play && <div className={`${styles['btn-play__triangle']} ${styles[sizeTriangleClass]}`} role="triangle"/> }
    { play && <div className={`${styles['btn-play__double-rectangle']} ${styles[sizeRectangleClass]}`} role="double"/> }
  </button>
}

export default BtnPlay;