import {FC} from "react";
import style from "./style.module.scss";
import {SoftwareInterface} from "../../interface/SoftwareInterface";

interface SoftwareFC {
  software: SoftwareInterface[]
}

const Software: FC<SoftwareFC> = ({ software}) => {
  const toCropText = (str: string, crop: number): string => {
    return str.length > crop ? `${str.slice(1, crop)}...` : str;
  }

  return <section className={style.software}>
    <div className={style.software__header}>
      <h3 className={'cap__header'}><span className={'cap__header--highlight'}>All-In-One</span> Cloud Software.</h3>
      <span className={'cap__detailed'}>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</span>
    </div>
    <div className={style.software__cards}>

      { software.map((soft: SoftwareInterface, index: number) => (
        <div className={style['software-card']} key={`${soft.title}-${index}`} role="software">
          <picture>
            <source srcSet={"/svg/doc.svg"} media="(max-width:1024px)" width={80} height={80}/>
            <img className={style['software-card__picture']} src={`/svg/${soft.img}`} alt='symbol' width={100} height={100}/>
          </picture>
          <h4 className={style['software-card__h4']}>{toCropText(soft.title, 60)}</h4>
          <span className={style['software-card__span']}>{toCropText(soft.text, 100)}</span>
        </div>
      ))}

    </div>
  </section>
};

export default Software;