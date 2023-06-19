import {FC, useEffect, useState} from "react";
import style from "./style.module.scss";
import {SlideInterface} from "../../interface/SlideInterface";
import SliderDefault from "../../component/SliderDefault";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";

interface RecommendedInterface{
  slides: SlideInterface[]
}

const Recommended: FC<RecommendedInterface> = ({slides}) => {
  const [sliders, setSliders] = useState<SlideInterface[]>([]);
  const responsive: ResponsiveInterface[] = [
    {
      breakpoint: 1440,
      settings: {slidesToShow: 3},
    },
    {
      breakpoint: 1024,
      settings: {slidesToShow: 2},
    },
    {
      breakpoint: 768,
      settings: {slidesToShow: 1},
    }
  ]

  useEffect(() => {
    setSliders([...slides, ...slides, ...slides]);
  }, []);

  return <section className={style.recommended}>
    <h5 className={'h-bold'}>Recommended for you</h5>
    <div className={style.recommended__slider}>
      <SliderDefault slidesToShow={4} responsive={responsive}>
        { sliders.map((slides: SlideInterface, index: number) => (

          <div key={`${slides.date}-${index}`} className={style['rec-slide__frame']} role="slide">
            <div className={style['rec-slide']}>
              <img className={style['rec-slide__picture']} src={slides.images[0]}  alt='images'/>
              <div className={style['rec-slide__detailed']}>
                <div className={style['rec-slide__info']}>
                  <img className={style['rec-slide__ico']} src={'/svg/four-square-transparent.svg'} alt='svg'/>
                  <span className={style['rec-slide__subtitle']}>{slides.profile.job}</span>
                </div>
                <div className={style['rec-slide__info']}>
                  <img className={style['rec-slide__ico']} src={'/svg/clock.svg'} alt='svg'/>
                  <span className={style['rec-slide__subtitle']}>3 Month</span>
                </div>
              </div>
              <h5 className={style['rec-slide__h']}>{slides.title}</h5>
              <span className={style['rec-slide__desc']}>{slides.desc}</span>
              <div className={style['rec-slide__basement']}>
                <div className={`${style['rec-slide__info']} ${style['rec-slide__info--gap-up']}`}>
                  <img className={style['rec-slide__avatar']} src={"/image/avatar.png"} alt={'avatar'} />
                  <h6 className={style['rec-slide__full-name']}>{slides.profile.job}</h6>
                </div>
                <div className={`${style['rec-slide__info']} ${style['rec-slide__info--gap-up']}`}>
                  <span className={style['rec-slide__old-price']}>{slides.price.cost}</span>
                  <span className={style['rec-slide__current-price']}>{slides.price.discount}</span>
                </div>
              </div>
            </div>
          </div>

        )) }
      </SliderDefault>
    </div>
  </section>
}

export default Recommended;