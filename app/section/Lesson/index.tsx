import {FC} from "react";
import style from "./style.module.scss";
import SliderDefault from "../../component/SliderDefault";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";

const Lesson: FC = () => {
  const responsive: ResponsiveInterface[] = [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]

  return <section className={style.lesson}>
    <h3 className='h-bold'>Welcome back, ready for your next lesson?</h3>

    <div className={style.lesson__slider}>
      <SliderDefault slidesToShow={3} responsive={responsive}>

        <div className={style.lesson__frame}>
          <div className={style.lesson__card}>
            <img className={style.lesson__picture} src={'/image/conversation.png'} alt={'picture'} />
            <h6 className={style.lesson__h}>AWS Certified Solutions Architect</h6>
            <div className={style.lesson__profile}>
              <img src={'/image/avatar.png'} className={style.lesson__avatart} alt={'avatar'} />
              <span className={style.lesson__name}>Lina</span>
            </div>
            <div className={style.lesson__line} >
              <div className={style.lesson__bar} style={{width: '70%'}}/>
            </div>
            <span className={style.lesson__page}>Lesson 5 of 7</span>
          </div>
        </div>

        <div className={style.lesson__frame}>
          <div className={style.lesson__card}>
            <img className={style.lesson__picture} src={'/image/notebook.png'} alt={'picture'} />
            <h6 className={style.lesson__h}>AWS Certified Solutions Architect</h6>
            <div className={style.lesson__profile}>
              <img src={'/image/avatar.png'} className={style.lesson__avatart} alt={'avatar'} />
              <span className={style.lesson__name}>Lina</span>
            </div>
            <div className={style.lesson__line} >
              <div className={style.lesson__bar} style={{width: '70%'}}/>
            </div>
            <span className={style.lesson__page}>Lesson 5 of 7</span>
          </div>
        </div>

        <div className={style.lesson__frame}>
          <div className={style.lesson__card}>
            <img className={style.lesson__picture} src={'/image/javascript.png'} alt={'picture'} />
            <h6 className={style.lesson__h}>AWS Certified Solutions Architect</h6>
            <div className={style.lesson__profile}>
              <img src={'/image/avatar.png'} className={style.lesson__avatart} alt={'avatar'} />
              <span className={style.lesson__name}>Lina</span>
            </div>
            <div className={style.lesson__line} >
              <div className={style.lesson__bar} style={{width: '70%'}}/>
            </div>
            <span className={style.lesson__page}>Lesson 5 of 7</span>
          </div>
        </div>

        <div className={style.lesson__frame}>
          <div className={style.lesson__card}>
            <img className={style.lesson__picture} src={'/image/javascript.png'} alt={'picture'} />
            <h6 className={style.lesson__h}>AWS Certified Solutions Architect</h6>
            <div className={style.lesson__profile}>
              <img src={'/image/avatar.png'} className={style.lesson__avatart} alt={'avatar'} />
              <span className={style.lesson__name}>Lina</span>
            </div>
            <div className={style.lesson__line} >
              <div className={style.lesson__bar} style={{width: '70%'}}/>
            </div>
            <span className={style.lesson__page}>Lesson 5 of 7</span>
          </div>
        </div>

      </SliderDefault>
    </div>

  </section>
}

export default Lesson;