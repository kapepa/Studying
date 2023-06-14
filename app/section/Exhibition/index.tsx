import React, {FC, useEffect, useState} from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import Pagination from "../../component/Pagination";
import {LotInterface} from "../../interface/LotInterface";

interface GeneratorInterface{
  max: number;
  currentPage: number;
}

interface ExhibitionInterface {
  subject: string[];
  lot: LotInterface[];
  lotLength: number;
  step?: number;
}

const Exhibition: FC<ExhibitionInterface> = ({subject, lot, lotLength, step= 6 }) => {
  const [subjectSelect, setSubjectSelect] = useState<string>();
  const [gallery, setGallery] = useState<LotInterface[]>();
  const [generator, setGenerator] = useState<GeneratorInterface>()

  const changePage = (page: number) => {
    const calcPage: number = (page - 1) * step;
    const selectLot = lot.slice(calcPage, calcPage + step);

    setGallery(selectLot);
    setGenerator((prev) => ({...prev, currentPage: page}))
  }

  useEffect(() => {
    setSubjectSelect(subject[0]);
    setGallery(lot.slice(0,step));
    setGenerator({max: Math.ceil(lotLength / step), currentPage: 1});
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
        <div key={`${item}-${index}`} className={style.lot} role="lot">
          <img className={style.lot__img} src={`/image/${item.img}`} alt={item.name}/>
          <div className={style.lot__info}>
            <h6 className={style.lot__h}>{item.name}</h6>
            <span className={style.lot__price}>$ {item.price}</span>
          </div>
        </div>
      ))}
    </div>
    <div className={style.exhibition__pagination}>
      {!!generator && lotLength >= step && <Pagination max={generator.max} changePage={changePage} currentPage={generator.currentPage} data-testid="pagination"/>}
    </div>
  </section>
}

export default Exhibition;