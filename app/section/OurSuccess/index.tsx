import {FC, useState} from "react";
import style from "./style.module.scss";
import {AchievementInterface} from "../../interface/AchievementInterface";

interface OurSuccessInterface {
  achievement: AchievementInterface;
}

const OurSuccess: FC<OurSuccessInterface> = ({achievement}) => {
  const [state, setState] = useState<AchievementInterface>({students: 15500, success: 75, questions: 35, experts: 26, experience: 16});

  const shortDigit = (n: number): string => {
    if (n < 1e3) return n + '';
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(0) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(0) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(0) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(0) + "T";
  }

  return <section className={style['our-success']}>
    <div className={style['our-success__header']}>
      <h2 className={style['our-success__h2']}>Our Success</h2>
      <span className={style['our-success__span']}>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </span>
    </div>
    <div className={style['our-success__counters']}>
      <div className={style['our-success__cell']}>
        <div className={style['our-success__digit']}>{shortDigit(state.students)}</div>
        <span className={style['our-success__desc']}>Students</span>
      </div>
      <div className={style['our-success__cell']}>
        <div className={style['our-success__digit']}>{shortDigit(state.success)}</div>
        <span className={style['our-success__desc']}>Total success</span>
      </div>
      <div className={style['our-success__cell']}>
        <div className={style['our-success__digit']}>{shortDigit(state.questions)}</div>
        <span className={style['our-success__desc']}>Main questions</span>
      </div>
      <div className={style['our-success__cell']}>
        <div className={style['our-success__digit']}>{shortDigit(state.experts)}</div>
        <span className={style['our-success__desc']}>Chief experts</span>
      </div>
      <div className={style['our-success__cell']}>
        <div className={style['our-success__digit']}>{shortDigit(state.experience)}</div>
        <span className={style['our-success__desc']}>Years of experience</span>
      </div>
    </div>
  </section>
}

export default OurSuccess;