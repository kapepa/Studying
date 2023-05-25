import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Purchase: FC = () => {
  return <section className={style.purchase}>
    <picture>
      <source  srcSet={"/image/course-bg425x144.png"} media="(max-width: 425px)"/>
      <source  srcSet={"/image/course-bg768x261.png"} media="(max-width: 768px)"/>
      <source  srcSet={"/image/course-bg1024x348.png"} media="(max-width: 1024px)"/>
      <img className={style.purchase__picture}   src={"/image/course-bg1920x652.png"}  alt={"bg"}/>
    </picture>
    <div className='container'>
      <div className={style.purchase__base}>
        <div className={style.purchase__dashboard}>
          <div className={style.purchase__top}>
            <BtnDefault text={"Overview"} type={"button"} shape={"rounding"} bg={"light-green"} click={() => {}}/>
            <BtnDefault text={"Overview"} type={"button"} shape={"rounding"} bg={"light-green"} click={() => {}}/>
          </div>
          <div className={style.purchase__interview}>

            <div className={style.purchase__rating}>
              <div className={style.purchase__display}>
                <span className={style.purchase__scorer}>4 out of 5</span>
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

                <div className={style.purchase__point}>
                  <span className={style.purchase__sign}>5 Stars</span>
                  <div className={style.purchase__bar}>
                    <div className={style.purchase__val} style={{width: `${70}%`}}/>
                  </div>
                </div>

                <div className={style.purchase__point}>
                  <span className={style.purchase__sign}>4 Stars</span>
                  <div className={style.purchase__bar}>
                    <div className={style.purchase__val} style={{width: `${70}%`}}/>
                  </div>
                </div>

                <div className={style.purchase__point}>
                  <span className={style.purchase__sign}>3 Stars</span>
                  <div className={style.purchase__bar}>
                    <div className={style.purchase__val} style={{width: `${70}%`}}/>
                  </div>
                </div>

                <div className={style.purchase__point}>
                  <span className={style.purchase__sign}>2 Stars</span>
                  <div className={style.purchase__bar}>
                    <div className={style.purchase__val} style={{width: `${70}%`}}/>
                  </div>
                </div>

                <div className={style.purchase__point}>
                  <span className={style.purchase__sign}>1 Stars</span>
                  <div className={style.purchase__bar}>
                    <div className={style.purchase__val} style={{width: `${70}%`}}/>
                  </div>
                </div>

              </div>
            </div>

            <div className={style.purchase__comments}>

              <div className={style['pur-comments']}>
                <div className={style['pur-comments__top']}>
                  <div className={style['pur-comments__profile']}>
                    <img className={style['pur-comments__avatar']} src={"/image/avatar.png"} alt={"avatar"} />
                    <span className={style['pur-comments__name']}>Lina</span>
                  </div>
                  <div className={style['pur-comments__time']}>
                    <img className={style['pur-comments__clock']} src={"/svg/clock.svg"} alt={"clock"} />
                    <span className={style['pur-comments__date']}>3 Month</span>
                  </div>
                </div>
                <span className={style['pur-comments__message']}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
              </div>

              <div className={style['pur-comments']}>
                <div className={style['pur-comments__top']}>
                  <div className={style['pur-comments__profile']}>
                    <img className={style['pur-comments__avatar']} src={"/image/avatar.png"} alt={"avatar"} />
                    <span className={style['pur-comments__name']}>Lina</span>
                  </div>
                  <div className={style['pur-comments__time']}>
                    <img className={style['pur-comments__clock']} src={"/svg/clock.svg"} alt={"clock"} />
                    <span className={style['pur-comments__date']}>3 Month</span>
                  </div>
                </div>
                <span className={style['pur-comments__message']}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
              </div>

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
                <span className={style['pur-card__value']}>$49.65</span>
                <span className={style['pur-card__price']}>$99.99</span>
                <span className={style['pur-card__discount']}>50% Off</span>
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
                <img className={style['pur-card__social']} src={'/svg/twitter.svg'} alt={'social'}/>
                <img className={style['pur-card__social']} src={'/svg/facebook.svg'} alt={'social'}/>
                <img className={style['pur-card__social']} src={'/svg/youtube.svg'} alt={'social'}/>
                <img className={style['pur-card__social']} src={'/svg/instagram.svg'} alt={'social'}/>
                <img className={style['pur-card__social']} src={'/svg/telegram.svg'} alt={'social'}/>
                <img className={style['pur-card__social']} src={'/svg/whatsapp.svg'} alt={'social'}/>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
}

export default Purchase;