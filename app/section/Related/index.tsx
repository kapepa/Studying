import React, {FC} from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Related: FC = () => {
  let responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

  const SampleNextArrow = ({onClick}) => {
    return <div className={style['related__slick-next']} onClick={onClick}/>;
  }

  const SamplePrevArrow = ({onClick}) => {
    return <div className={style['related__slick-prev']} onClick={onClick}/>;
  }

  return <section className={style.related}>
    <h4 className="h-bold">Related Blog</h4>
    <div className={style.related__cards}>
      <Slider
        speed={500}
        infinite={true}
        slidesToShow={2}
        responsive={responsive}
        className={style.related__slider}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        <div className={style.related__frame}>
          <div className={style.related__card}>
            <img className={style.related__photo} src={'/image/card-one.png'} alt={'background image'}/>
            <h4 className={style.related__h}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>
            <div className={style.related__profile}>
              <img className={style.related__avatar} src={'/image/avatar.png'}  alt={'avatar'} />
              <span className={style.related__namespace}>Lina</span>
            </div>
            <span className={style.related__text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
            <div className={style.related__basement}>
              <Link className={style.related__link} href={'/'}>Read more</Link>
              <div className={style.related__count}>
                <img className={style.related__eye} src={'/svg/eye.svg'} alt={'eye svg'}/>
                <span className={style.related__number}>251,232</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.related__frame}>
          <div className={style.related__card}>
            <img className={style.related__photo} src={'/image/card-two.png'} alt={'background image'}/>
            <h4 className={style.related__h}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>
            <div className={style.related__profile}>
              <img className={style.related__avatar} src={'/image/avatar.png'}  alt={'avatar'} />
              <span className={style.related__namespace}>Lina</span>
            </div>
            <span className={style.related__text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
            <div className={style.related__basement}>
              <Link className={style.related__link} href={'/'}>Read more</Link>
              <div className={style.related__count}>
                <img className={style.related__eye} src={'/svg/eye.svg'} alt={'eye svg'}/>
                <span className={style.related__number}>251,232</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.related__frame}>
          <div className={style.related__card}>
            <img className={style.related__photo} src={'/image/card-one.png'} alt={'background image'}/>
            <h4 className={style.related__h}>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4>
            <div className={style.related__profile}>
              <img className={style.related__avatar} src={'/image/avatar.png'}  alt={'avatar'} />
              <span className={style.related__namespace}>Lina</span>
            </div>
            <span className={style.related__text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
            <div className={style.related__basement}>
              <Link className={style.related__link} href={'/'}>Read more</Link>
              <div className={style.related__count}>
                <img className={style.related__eye} src={'/svg/eye.svg'} alt={'eye svg'}/>
                <span className={style.related__number}>251,232</span>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  </section>
};

export default Related;
