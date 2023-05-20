import {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const IsApp: FC = () => {
  return <section className={style['is-app']}>

    <div className={style['is-app__top-board']}>
      <h5 className={style['is-app__h']}>APP is available for free</h5>
      <div className={style['is-app__interaction']}>
        <BtnDefault text={'Android APP'} shape={'rounding'} bg={'light-blue'}  click={() => {}}/>
        <BtnDefault text={'IOS APP'} shape={'rounding'} bg={'light-green'} click={() => {}}/>
      </div>
    </div>

    <div className={style['is-app__basic']}>

      <div className={style['is-app__card']}>
        <img src={'/image/notebook.png'} className={style['is-app__picture']} alt={'picture'} />
        <h5 className={style['is-app__title']}>Become a Teacher</h5>
        <span className={style['is-app__more']}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
        <div className={style['is-app__basement']}>
          <BtnDefault text={'Apply a Teacher'} shape={'rounding'} bg={"light-green"} click={() => {}}/>
        </div>
      </div>

      <div className={style['is-app__card']}>
        <img src={'/image/notebook.png'} className={style['is-app__picture']} alt={'picture'} />
        <h5 className={style['is-app__title']}>Become a Teacher</h5>
        <span className={style['is-app__more']}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</span>
        <div className={style['is-app__basement']}>
          <BtnDefault text={'Apply a Teacher'} shape={'rounding'} bg={"light-green"} click={() => {}}/>
        </div>
      </div>

    </div>

  </section>
}

export default IsApp;