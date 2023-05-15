import React, {FC} from "react";
import style from "./style.module.scss";

const Related: FC = () => {
  return <section className={style.related}>
    <h4 className="h-bold">Related Blog</h4>
    <div className={style.related__cards}>
      <div className={style.related__card}>
        <img src={'/image/card-one.png'} alt={'background image'}/>
        <h4>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>
        <div className={style.related__avatar}>

        </div>
      </div>
    </div>
  </section>
};

export default Related;
