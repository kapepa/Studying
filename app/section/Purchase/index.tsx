import React, {FC, useEffect, useState} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";
import Link from "next/link";
import {PurchaseInterface} from "../../interface/PurchaseInterface";
import {CommentsInterface} from "../../interface/CommentsInterface";

interface PurchaseFC {
  purchase: PurchaseInterface,
}

const Purchase: FC<PurchaseFC> = ({purchase}) => {
  const date = { day: 86400000 , month: 2592000000, year: 31104000000 };
  const [vote, setVoTe] = useState<{total: number, round: number, max: number}>({total: 0, round: 0, max: 0});

  const sumVote = () => {
    const values = Object.values(purchase.rating)
    const sum: number = values.reduce((accum, val) => accum + val, 0);
    setVoTe({total: sum, max: values.length, round: Math.round(sum / values.length)});
  }

  const calcVote = (digit: number) => Math.round(digit / vote.total * 100 );
  const toShortText = (str: string): string => str.length > 100 ? `${str.slice(1, 100)}...` : str;

  const calcTimeAgo = (time: number) => {
    const different: number = Date.now() - time;

    switch (different > 0){
      case different <= date.day:
        return `to day`;
      case different <= date.month:
        return `${Math.round(different / date.day)} day ago`;
      case different <= date.year:
        return `${Math.round(different / date.month)} month ago`;
      case different >= date.year:
        return `${Math.round(different / date.year)} month ago`;
    }
  }

  useEffect(() => {
    sumVote();
  }, [])

  return <section className={style.purchase}>
    <picture>
      <source  srcSet={"/image/course-bg425x144.png"} media="(max-width: 425px)"/>
      <source  srcSet={"/image/course-bg768x261.png"} media="(max-width: 768px)"/>
      <source  srcSet={"/image/course-bg1024x348.png"} media="(max-width: 1024px)"/>
      <img className={style.purchase__picture} src={"/image/course-bg1920x652.png"}  alt={"background"}/>
    </picture>
    <div className='container'>
      <div className={style.purchase__base}>
        <div className={style.purchase__dashboard}>
          <div className={style.purchase__top}>
            <BtnDefault text={"Overview"} type={"button"} shape={"rounding"} bg={"light-green"} click={() => {}}/>
            <BtnDefault text={"Review"} type={"button"} shape={"rounding"} bg={"light-green"} click={() => {}}/>
          </div>
          <div className={style.purchase__interview}>

            <div className={style.purchase__rating}>
              <div className={style.purchase__display}>
                <span className={style.purchase__scorer}>{`${vote.round} out of ${vote.max}`}</span>
                <div className={style.purchase__stars}>
                  <img className={style.purchase__star} src={"/svg/star.svg"} alt={"star"}/>
                  <img className={style.purchase__star} src={"/svg/star.svg"} alt={"star"}/>
                  <img className={style.purchase__star} src={"/svg/star.svg"} alt={"star"}/>
                  <img className={style.purchase__star} src={"/svg/star.svg"} alt={"star"}/>
                  <img className={style.purchase__star} src={"/svg/star.svg"} alt={"star"}/>
                </div>
                <span className={style.purchase__subtitle}>Top Raiting</span>
              </div>
              <div className={style.purchase__evaluation}>

                { !!purchase.rating && Object.keys(purchase?.rating).map((star: string, index: number) => {
                  let rating = purchase.rating[star];
                  return (
                    <div className={style.purchase__point} key={`${star}-${index}`} role="star">
                      <span className={style.purchase__sign}>{star} Stars</span>
                      <div className={style.purchase__bar}>
                        <div className={style.purchase__val} style={{width: `${calcVote(rating)}%`}}/>
                      </div>
                    </div>
                  )
                }) }

              </div>
            </div>

            <div className={style.purchase__comments}>

              { purchase.comments.map((comment: CommentsInterface, index: number) => (
                <div className={style['pur-comments']} key={`${comment.created_at}-${index}`} role="comment">
                  <div className={style['pur-comments__top']}>
                    <div className={style['pur-comments__profile']}>
                      <img className={style['pur-comments__avatar']} src={`/image/${comment.user.avatar}`} alt={"avatar"} />
                      <span className={style['pur-comments__name']}>{comment.user.name}</span>
                    </div>
                    <div className={style['pur-comments__time']}>
                      <img className={style['pur-comments__clock']} src={"/svg/clock.svg"} alt={"clock"} />
                      <span className={style['pur-comments__date']}>{calcTimeAgo(comment.created_at)}</span>
                    </div>
                  </div>
                  <span className={style['pur-comments__message']}>{toShortText(comment.text)}</span>
                </div>
              )) }

            </div>

          </div>
        </div>
        <aside className={style.purchase__aside}>
          <div className={style['pur-card']}>
            <picture>
              <source srcSet={"/image/course-bg425x144.png"} media={"(max-width: 768px)"}/>
              <img className={style['pur-card__img']} src={"/image/course-bg768x261.png"} alt={"bg"}/>
            </picture>
            <div className={style['pur-card__purchase']}>
              <div className={style['pur-card__prices']}>
                <span className={style['pur-card__value']}>${ purchase.price.discount / 100 * purchase.price.value }</span>
                <span className={style['pur-card__price']}>{purchase.price.value}</span>
                <span className={style['pur-card__discount']}>{purchase.price.discount} % Off</span>
              </div>
              <span className={style['pur-card__time']}>11 hour left at this price</span>
              <BtnDefault text={"Buy Now"} bg={"light-green"} shape={"rounding"} click={() => {}}/>
            </div>
            <div className={style['pur-card__template']}>
              <h5 className={style['pur-card__title']}>This Course included</h5>
              <div className={style['pur-card__list']}>

                <div className={style['pur-card__cell']}>
                  <img className={style['pur-card__ico']} src={'/svg/sun.svg'} alt={"ico"}/>
                  <span className={style['pur-card__more']}>Money Back Guarantee</span>
                </div>

                <div className={style['pur-card__cell']}>
                  <img className={style['pur-card__ico']} src={'/svg/camera.svg'} alt={"ico"}/>
                  <span className={style['pur-card__more']}>Access on all devices</span>
                </div>

                <div className={style['pur-card__cell']}>
                  <img className={style['pur-card__ico']} src={'/svg/doc-file.svg'} alt={"ico"}/>
                  <span className={style['pur-card__more']}>Certification of completion</span>
                </div>

                <div className={style['pur-card__cell']}>
                  <img className={style['pur-card__ico']} src={'/svg/schedule.svg'} alt={"ico"}/>
                  <span className={style['pur-card__more']}>32 Moduls</span>
                </div>

              </div>
            </div>
            <div className={style['pur-card__template']}>
              <h5 className={style['pur-card__title']}>Training 5 or more people</h5>
              <span className={style['pur-card__text']}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
            </div>
            <div className={style['pur-card__template']}>
              <h5 className={style['pur-card__title']}>Share this course</h5>
              <div className={style['pur-card__community']}>
                <Link href={"#"} ><img className={style['pur-card__social']} src={'/svg/twitter.svg'} alt={'social'}/></Link>
                <Link href={"#"} ><img className={style['pur-card__social']} src={'/svg/facebook.svg'} alt={'social'}/></Link>
                <Link href={"#"} ><img className={style['pur-card__social']} src={'/svg/youtube.svg'} alt={'social'}/></Link>
                <Link href={"#"} ><img className={style['pur-card__social']} src={'/svg/instagram.svg'} alt={'social'}/></Link>
                <Link href={"#"} ><img className={style['pur-card__social']} src={'/svg/telegram.svg'} alt={'social'}/></Link>
                <Link href={"#"} ><img className={style['pur-card__social']} src={'/svg/whatsapp.svg'} alt={'social'}/></Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
}

export default Purchase;