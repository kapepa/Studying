import React, {FC, useState} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";
import {PricingInterface, TypeEnum} from "../../interface/PricingInterface";
import classNames from "classnames";

interface PricingFC {
  pricing: PricingInterface[];
}

const Pricing: FC<PricingFC> = ({pricing}) => {
  const [isShadow, setIsShadow] = useState<number>(1);

  const toShadow = (index: number) => {
    return classNames({[style['pricing__card--shadow']]: isShadow === index});
  }

  const styleSkill = (type: keyof typeof TypeEnum) => {
    switch (type) {
      case "like":
        return style['pricing__capability--gray'];
      case "corporate":
        return style['pricing__capability--green'];
      default:
        return "";
    }
  }

  const clickPricing = (type: keyof typeof TypeEnum) => {

  }

  return <section className={style.pricing}>
    <h3 className={style.pricing__h}>Affordable pricing</h3>
    <div className={style.pricing__dashboard}>

      {pricing.map((item: PricingInterface, index: number) => (
        <div className={`${style.pricing__card} ${toShadow(index)}`} key={`${item.term}-${item.type}-${index}`} role="card">
        <div className={style.pricing__cap}>
          <span className={style.pricing__subtitle}>{item.type}</span>
          { !!item.subtitle ? <div><span className={style.pricing__clue}>{item.subtitle}</span></div> : <div />}
        </div>
        <h5 className={style.pricing__worth}>${ item.price > 0 ? item.price : "Free " }<span className={style['pricing__worth--small']}>/ ${item.term}</span></h5>
        <div className={style.pricing__possibilities}>
          { item.capability.map((skill: string, index: number) => (
            <span className={`${style.pricing__capability} ${styleSkill(item.type)}`} key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
        <BtnDefault click={() => {clickPricing(item.type)}} text={item.detailed} bg={'transparent-green'} shape={'rounding'}/>
      </div>
      ))}

    </div>
  </section>
}

export default Pricing;