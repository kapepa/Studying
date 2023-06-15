import React, {FC} from "react";
import style from "./style.module.scss";
import {OffersInterface} from "../../interface/OffersInterface";

interface MarketingInterface {
  offers: OffersInterface[]
}

const Marketing: FC<MarketingInterface> = ({offers}) => {
  return <section className={style.marketing}>
    <h4 className="h-bold">Marketing Articles</h4>
    <div className={style.marketing__cards}>

      { !!offers.length && offers.map((offer: OffersInterface, index: number) => (
        <div className={style.marketing__card} key={`${offer.title}-${index}`} role="card">
          <img className={style.marketing__image} src={offer.img} alt={'img'}/>
          <div className={style.marketing__info}>
            <div className={style.marketing__work}>
              <img className={style.marketing__square} src={'/svg/four-square-transparent.svg'} alt={'four square'}/>
              <span className={style.marketing__profession}>{offer.profession}</span>
            </div>
            <div className={style.marketing__date}>{offer.term}</div>
          </div>
          <h5 className={style.marketing__h}>{offer.title}</h5>
          <span className={style.marketing__span}>{offer.desc}</span>
          <div className={style.marketing__basement}>
            <div className={style.marketing__profile}>
              <img className={style.marketing__avatar} src={offer.user.avatar} alt={'avatar'}/>
              <span className={style['marketing__full-name']}>{offer.user.name}</span>
            </div>
            <div className={style.marketing__cost}>
              <span className={style['marketing__old-price']}>${offer.price}</span>
              { offer.discount > 0 && <span className={style['marketing__worth']}>${ offer.price - (offer.price * (offer.discount / 100)) }</span> }
            </div>
          </div>
        </div>
        ))
      }

    </div>
  </section>
}

export default Marketing;