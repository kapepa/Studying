import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";
import BtnPlay from "../../component/BtnPlay";

const Presentation: FC = () => {
  const clickJoinBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('join')
  }

  const clickPlay = (b: boolean) => {
    console.log(b)
  }

  return <section className={style.presentation}>
    <div className={style.presentation__left}>
      <h1 className={style.presentation__h1}>
        <span className={style['presentation__h1--first']}>Studying</span> Online is now much easier
      </h1>
      <div className={style.presentation__desc}>
        TOTC is an interesting platform that will teach you in more an interactive way
      </div>
      <div className={style.presentation__basement}>
        <BtnDefault click={clickJoinBtnClick} text='Join for free' size='large'/>
        <div className={style.presentation__play}>
          <div className={style['presentation__play-area']}>
            <BtnPlay size={80} cb={clickPlay} sizeTriangle='large'/>
          </div>
          <span className={style.presentation__namespace}>Watch how it works</span>
        </div>
      </div>
    </div>
    <div className={style.presentation__right}>
      <div className={`${style['presentation__card-message']}`}>
        <div className={`${style['card-message']}`}>
          <div className={style['card-message__frame']}>
            <img width={50} height={50} src='/svg/calendar.svg' alt='img' className={style['card-message__images']}/>
            <div className={style['card-message__desc']}>
              <h4 className={style['card-message__h4']}>250k</h4>
              <span className={style['card-message__span']}>Assisted Student</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Presentation;