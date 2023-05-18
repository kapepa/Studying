import {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Pricing: FC = () => {
  return <section className={style.pricing}>
    <h3 className={style.pricing__h}>Affordable pricing</h3>
    <div className={style.pricing__dashboard}>

      <div className={`${style.pricing__card}`}>
        <div className={style.pricing__cap}>
          <span className={style.pricing__subtitle}>Like a pussy</span>
          <div />
        </div>
        <h5 className={style.pricing__worth}>Free <span className={style['pricing__worth--small']}>/ forever</span></h5>
        <div className={style.pricing__possibilities}>
          <span className={`${style.pricing__capability} ${style['pricing__capability--gray']}`}>Components-driven system</span>
          <span className={`${style.pricing__capability} ${style['pricing__capability--gray']}`}>Sales-boosting landing pages</span>
          <span className={`${style.pricing__capability} ${style['pricing__capability--gray']}`}>Awesome Feather icons pack</span>
        </div>
        <BtnDefault text={'Try for free'} bg={'transparent-green'} shape={'rounding'}/>
      </div>

      <div className={`${style.pricing__card} ${style['pricing__card--shadow']}`}>
        <div className={style.pricing__cap}>
          <span className={style.pricing__subtitle}>Individual</span>
          <div>
            <span className={style.pricing__clue}>best!</span>
          </div>
        </div>
        <h5 className={style.pricing__worth}>$24 <span className={style['pricing__worth--small']}>/ month</span></h5>
        <div className={style.pricing__possibilities}>
          <span className={style.pricing__capability}>Components-driven system</span>
          <span className={style.pricing__capability}>Sales-boosting landing pages</span>
          <span className={style.pricing__capability}>Awesome Feather icons pack</span>
          <span className={style.pricing__capability}>Themed into 3 different styles</span>
          <span className={style.pricing__capability}>Will help to learn Figma</span>
        </div>
        <BtnDefault text={'Regular license'} bg={'light-green'} shape={'rounding'}/>
      </div>

      <div className={`${style.pricing__card}`}>
        <div className={style.pricing__cap}>
          <span className={style.pricing__subtitle}>Corporate</span>
          <div />
        </div>
        <h5 className={style.pricing__worth}>$12 <span className={style['pricing__worth--small']}>/ editor</span></h5>
        <div className={style.pricing__possibilities}>
          <span className={`${style.pricing__capability} ${style['pricing__capability--green']}`}>Components-driven system</span>
          <span className={`${style.pricing__capability} ${style['pricing__capability--green']}`}>Sales-boosting landing pages</span>
          <span className={`${style.pricing__capability} ${style['pricing__capability--green']}`}>Awesome Feather icons pack</span>
          <span className={`${style.pricing__capability} ${style['pricing__capability--green']}`}>Themed into 3 different styles</span>
        </div>
        <BtnDefault text={'Regular license'} bg={'transparent-green'} shape={'rounding'}/>
      </div>

    </div>
  </section>
}

export default Pricing;