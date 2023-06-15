import {FC} from "react";
import style from "./style.module.scss";
import Link from 'next/link';
import {NewsInterface} from "../../interface/NewsInterface";

interface NewsFace {
  main: NewsInterface,
  list: NewsInterface[],
}

const News: FC<NewsFace> = ({ main,list}) => {
  const cropText = (str: string) => {
    return str.length >= 100 ? `${str.slice(0,100)}...` : str;
  }

  return <section className={style.news}>
    <div className={style.news__cap}>
      <h5 className={style.news__h}>Lastest News and Resources</h5>
      <span className={style.news__subtitle}>See the developments that have occurred to TOTC in the world</span>
    </div>
    <div className={style.news__content}>

      <div className={style.newspaper}>
        <img src={main.img} className={style.newspaper__images} alt={'news images'}/>
        <div className={style.newspaper__category}>
          <div className={style.newspaper__chapter}>{main.type}</div>
        </div>
        <h5 className={style.newspaper__h}>{cropText(main.title)}</h5>
        <span className={style.newspaper__span}>{cropText(main.desc)}</span>
        <div className={style.newspaper__basement}>
          <Link href={`/course/${main.id}`}  onClick={(e) => {e.stopPropagation()}} className={style.newspaper__link}>Read more</Link>
          <div/>
        </div>
      </div>

      <div className={style.news__secondary}>

        { !!list.length && list.map((news: NewsInterface, index: number) => (
          <Link href={`/course/${news.id}`} className={style['short-news']} key={`${news.title}-${index}`} role="news">
            <div className={style['short-news__picture']}>
              <img className={style['short-news__img']} src={news.img} alt={'news images'} />
              <div className={style['short-news__category']}>
                <div className={style['short-news__chapter']}>{news.type}</div>
              </div>
            </div>
            <div className={style['short-news__content']}>
              <h5 className={style['short-news__h']}>{cropText(news.title)}</h5>
              <span className={style['short-news__span']}>{cropText(news.desc)}</span>
            </div>
          </Link>
        )) }

      </div>

    </div>
  </section>
}

export default News;