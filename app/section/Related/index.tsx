import React, {FC} from "react";
import style from "./style.module.scss";
import Link from "next/link";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";
import SliderDefault from "../../component/SliderDefault";
import {RelatedInterface} from "../../interface/RelatedInterface";

interface RelatedFC {
  related: RelatedInterface[]
}

const Related: FC<RelatedFC> = ({related}) => {
  let responsive: ResponsiveInterface[] = [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 }
    },
  ]

  const toCropText = (str: string, len: number): string => {
    return str.length > len ? `${str.slice(1,len)}...` : str ;
  }

  const decorateLooked = (digit: number): string => {
    let toStr: string = digit.toString();
    let split = toStr.split("")
    let key: number = Math.floor(toStr.length / 3);
    let shift: number = 0;

    while (key) {
      split.splice(key + shift * 3, 0, ",");
      key --; shift ++;
    }

    return split.join('');
  }

  return <section className={style.related}>
    <h4 className="h-bold">Related Blog</h4>
    <div className={style.related__cards}>
      <SliderDefault responsive={responsive} slidesToShow={2}>

        { related.map((relate: RelatedInterface, index: number) => (
          <div className={style.related__frame} key={`${relate.id}-${index}`} role={"related"}>
            <div className={style.related__card}>
              <img className={style.related__photo} src={`/image/${relate.img}`} alt={'background image'}/>
              <h4 className={style.related__h}>{toCropText(relate.title, 80)}</h4>
              <div className={style.related__profile}>
                <img className={style.related__avatar} src={`/image/${relate.user.avatar}`}  alt={'avatar'} />
                <span className={style.related__namespace}>{relate.user.name}</span>
              </div>
              <span className={style.related__text}>{toCropText(relate.text, 100)}</span>
              <div className={style.related__basement}>
                <Link className={style.related__link} href={`/blog/${relate.id}`}>Read more</Link>
                <div className={style.related__count}>
                  <img className={style.related__eye} src={'/svg/eye.svg'} alt={'eye svg'}/>
                  <span className={style.related__number}>{decorateLooked(relate.looked)}</span>
                </div>
              </div>
            </div>
          </div>
        )) }

      </SliderDefault>
    </div>
  </section>
};

export default Related;
