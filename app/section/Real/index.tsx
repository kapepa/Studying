import {FC} from "react";
import style from "./style.module.scss";
import {RealInterface} from "../../interface/RealInterface";

interface RealFC {
  real: RealInterface[]
}

const Real: FC<RealFC> = ({real}) => {
  const toCropText = (str: string): string => {
    return str.length > 70 ? `${str.slice(1, 70)}...` : str;
  }

  return <section className={style.real}>
    <h5 className="h-bold">Classes tought by real creators</h5>
    <div className={style.real__frame}>

      { real.map((card: RealInterface, index: number) => (
        <div className={style.card} key={`${card.text}-${index}`} role="real">
          <img className={style.card__avatar} src={`/image/${card.user.avatar}`} alt={"avatar"}/>
          <div className={style.card__more}>
            <h5 className={style.card__h}>{card.user.name}</h5>
            <span className={style.card__span}>{ toCropText(card.text) }</span>
          </div>
        </div>
      )) }

    </div>
  </section>
}

export default Real;