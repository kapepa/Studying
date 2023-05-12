import {FC} from "react";
import style from "./style.module.scss";

const News: FC = () => {
  return <section className={style.news}>
    <div className={style.news__cap}>
      <h5 className={style.news__h}>Lastest News and Resources</h5>
      <span className={style.news__subtitle}>See the developments that have occurred to TOTC in the world</span>
    </div>
    <div className={style.news__content}>
      <a className={style.newspaper}>
        <img src={'/image/news-one.png'} className={style.newspaper__images} alt={'news images'}/>
        <div className={style.newspaper__category}>
          <div className={style.newspaper__chapter}>NEWS</div>
        </div>
        <h5 className={style.newspaper__h}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h5>
        <span className={style.newspaper__span}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
        <div className={style.newspaper__basement}>
          <a className={style.newspaper__link}>Read more</a>
        </div>
      </a>
      <div className={style.news__secondary}>

        <a className={style['short-news']}>
          <div className={style['short-news__picture']}>
            <img className={style['short-news__img']} src={'/image/news-two.png'} alt={'news images'} />
            <div className={style['short-news__category']}>
              <div className={style['short-news__chapter']}>PRESS RELEASE</div>
            </div>
          </div>
          <div className={style['short-news__content']}>
            <h5 className={style['short-news__h']}>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h5>
            <span className={style['short-news__span']}>Class Technologies Inc., the company that created Class,...</span>
          </div>
        </a>

        <a className={style['short-news']}>
          <div className={style['short-news__picture']}>
            <img className={style['short-news__img']} src={'/image/news-three.png'} alt={'news images'} />
            <div className={style['short-news__category']}>
              <div className={style['short-news__chapter']}>NEWS</div>
            </div>
          </div>
          <div className={style['short-news__content']}>
            <h5 className={style['short-news__h']}>Zoom’s earliest investors are betting millions on a better Zoom for schools</h5>
            <span className={style['short-news__span']}>Zoom was never created to be a consumer product. Nonetheless, the...</span>
          </div>
        </a>

        <a className={style['short-news']}>
          <div className={style['short-news__picture']}>
            <img className={style['short-news__img']} src={'/image/news-four.png'} alt={'news images'} />
            <div className={style['short-news__category']}>
              <div className={style['short-news__chapter']}>NEWS</div>
            </div>
          </div>
          <div className={style['short-news__content']}>
            <h5 className={style['short-news__h']}>Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h5>
            <span className={style['short-news__span']}>This year, investors have reaped big financial returns from betting on Zoom...</span>
          </div>
        </a>

      </div>
    </div>
  </section>
}

export default News;