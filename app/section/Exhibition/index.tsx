import React, {FC, useEffect, useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames";

interface LotInterface {
  name: string,
  price: number,
  img: string
}

interface ExhibitionInterface {
  subject: string[];
  lot: LotInterface[];
}

const Exhibition: FC<ExhibitionInterface> = ({subject, lot}) => {
  const [subjectSelect, setSubjectSelect] = useState<string>();
  const [gallery, setGallery] = useState<LotInterface[]>()

  useEffect(() => {
    setSubjectSelect(subject[0]);
    setGallery(lot)
  }, [])

  return <section className={style.exhibition}>
    <div className={style.exhibition__type}>
      {subject.map((name: string, index: number) => (
        <div
          key={`${name}-${index}`}
          className={style.exhibition__scope}
        >
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setSubjectSelect(name) }}
            className={`${style.exhibition__subject} ${classNames({[style['exhibition__subject--active']]: name === subjectSelect})}`}
          >{name}</button>
        </div>
      ))}
    </div>
    <h5 className="h-bold">Literature course</h5>
    <div className={style.exhibition__gallery}>
      {!!gallery && gallery.map((item: LotInterface, index: number) => (
        <div key={`${item}-${index}`} className={style.lot}>
          <img className={style.lot__img} src={`/image/${item.img}`} alt={item.name}/>
          <div className={style.lot__info}>
            <h6 className={style.lot__h}>{item.name}</h6>
            <span className={style.lot__price}>$ {item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default Exhibition;