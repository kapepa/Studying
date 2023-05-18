import {FC} from "react";
import style from "./style.module.scss";

const Coaching: FC = () => {
  return <section className={style.coaching}>
    <h4 className={style.coaching__h}>Online coaching lessons for remote learning</h4>
    <div className={style.coaching__accordion}>
      <div className={style.coaching__cell}>
        <div className={style.coaching__cap}>
          <span className={style.coaching__subject}>Lorem ipsum dolor sit amet</span>
          <div className={style.coaching__arrow}/>
        </div>
        <div className={style.coaching__cap}>
          <span className={style.coaching__more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </div>
      </div>
    </div>
  </section>
}

export default Coaching;