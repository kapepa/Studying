import React, {FC} from "react";
import style from "./style.module.scss";

const Marketing: FC = () => {
  return <section className={style.marketing}>
    <h4 className="h-bold">Marketing Articles</h4>
    <div className={style.marketing__cards}>

      <div className={style.marketing__card}>
        <img className={style.marketing__image} src={'/image/news-two.png'} alt={'img'}/>
        <div className={style.marketing__info}>
          <div className={style.marketing__work}>
            <img className={style.marketing__square} src={'/svg/four-square-transparent.svg'} alt={'four square'}/>
            <span className={style.marketing__profession}>Design</span>
          </div>
          <div className={style.marketing__date}>3 Month</div>
        </div>
        <h5 className={style.marketing__h}>AWS Certified solutions Architect</h5>
        <span className={style.marketing__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        <div className={style.marketing__basement}>
          <div className={style.marketing__profile}>
            <img className={style.marketing__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            <span className={style['marketing__full-name']}>Lina</span>
          </div>
          <div className={style.marketing__cost}>
            <span className={style['marketing__old-price']}>$100</span>
            <span className={style['marketing__worth']}>$80</span>
          </div>
        </div>
      </div>

      <div className={style.marketing__card}>
        <img className={style.marketing__image} src={'/image/news-three.png'} alt={'img'}/>
        <div className={style.marketing__info}>
          <div className={style.marketing__work}>
            <img className={style.marketing__square} src={'/svg/four-square-transparent.svg'} alt={'four square'}/>
            <span className={style.marketing__profession}>Design</span>
          </div>
          <div className={style.marketing__date}>3 Month</div>
        </div>
        <h5 className={style.marketing__h}>AWS Certified solutions Architect</h5>
        <span className={style.marketing__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        <div className={style.marketing__basement}>
          <div className={style.marketing__profile}>
            <img className={style.marketing__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            <span className={style['marketing__full-name']}>Lina</span>
          </div>
          <div className={style.marketing__cost}>
            <span className={style['marketing__old-price']}>$100</span>
            <span className={style['marketing__worth']}>$80</span>
          </div>
        </div>
      </div>

      <div className={style.marketing__card}>
        <img className={style.marketing__image} src={'/image/news-one.png'} alt={'img'}/>
        <div className={style.marketing__info}>
          <div className={style.marketing__work}>
            <img className={style.marketing__square} src={'/svg/four-square-transparent.svg'} alt={'four square'}/>
            <span className={style.marketing__profession}>Design</span>
          </div>
          <div className={style.marketing__date}>3 Month</div>
        </div>
        <h5 className={style.marketing__h}>AWS Certified solutions Architect</h5>
        <span className={style.marketing__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        <div className={style.marketing__basement}>
          <div className={style.marketing__profile}>
            <img className={style.marketing__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            <span className={style['marketing__full-name']}>Lina</span>
          </div>
          <div className={style.marketing__cost}>
            <span className={style['marketing__old-price']}>$100</span>
            <span className={style['marketing__worth']}>$80</span>
          </div>
        </div>
      </div>

      <div className={style.marketing__card}>
        <img className={style.marketing__image} src={'/image/news-four.png'} alt={'img'}/>
        <div className={style.marketing__info}>
          <div className={style.marketing__work}>
            <img className={style.marketing__square} src={'/svg/four-square-transparent.svg'} alt={'four square'}/>
            <span className={style.marketing__profession}>Design</span>
          </div>
          <div className={style.marketing__date}>3 Month</div>
        </div>
        <h5 className={style.marketing__h}>AWS Certified solutions Architect</h5>
        <span className={style.marketing__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        <div className={style.marketing__basement}>
          <div className={style.marketing__profile}>
            <img className={style.marketing__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            <span className={style['marketing__full-name']}>Lina</span>
          </div>
          <div className={style.marketing__cost}>
            <span className={style['marketing__old-price']}>$100</span>
            <span className={style['marketing__worth']}>$80</span>
          </div>
        </div>
      </div>

    </div>
  </section>
}

export default Marketing;