import {FC} from "react";
import style from "./style.module.scss";

const Real: FC = () => {
  return <section className={style.real}>
    <h5 className="h-bold">Classes tought by real creators</h5>
    <div className={style.real__frame}>

      <div className={style.card}>
        <img className={style.card__avatar} src={"/image/community_people_five.png"} alt={"avatar"}/>
        <div className={style.card__more}>
          <h5 className={style.card__h}>Jane Cooper</h5>
          <span className={style.card__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>
      <div className={style.card}>
        <img className={style.card__avatar} src={"/image/community_people_three.png"} alt={"avatar"}/>
        <div className={style.card__more}>
          <h5 className={style.card__h}>Adam</h5>
          <span className={style.card__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>
      <div className={style.card}>
        <img className={style.card__avatar} src={"/image/community_people_two.png"} alt={"avatar"}/>
        <div className={style.card__more}>
          <h5 className={style.card__h}>Tomara</h5>
          <span className={style.card__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>

      <div className={style.card}>
        <img className={style.card__avatar} src={"/image/community_people_five.png"} alt={"avatar"}/>
        <div className={style.card__more}>
          <h5 className={style.card__h}>Jane Cooper</h5>
          <span className={style.card__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>
      <div className={style.card}>
        <img className={style.card__avatar} src={"/image/community_people_three.png"} alt={"avatar"}/>
        <div className={style.card__more}>
          <h5 className={style.card__h}>Adam</h5>
          <span className={style.card__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>
      <div className={style.card}>
        <img className={style.card__avatar} src={"/image/community_people_two.png"} alt={"avatar"}/>
        <div className={style.card__more}>
          <h5 className={style.card__h}>Tomara</h5>
          <span className={style.card__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>

    </div>
  </section>
}

export default Real;