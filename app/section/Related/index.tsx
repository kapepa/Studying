import React, {FC} from "react";
import style from "./style.module.scss";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";
import SliderDefault from "../../component/SliderDefault";

const Related: FC = () => {
  let responsive: ResponsiveInterface[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

  return <section className={style.related}>
    <h4 className="h-bold">Related Blog</h4>
    <div className={style.related__cards}>
      <SliderDefault responsive={responsive} slidesToShow={2}>
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

      </SliderDefault>
    </div>
  </section>
};

export default Related;
