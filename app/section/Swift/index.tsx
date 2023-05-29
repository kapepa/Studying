import {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Swift: FC = () => {
  return <section className={style.swift}>
    <picture>
      <source srcSet={'/image/course-bg425x144.png'} media={'(max-width: 768px)'}/>
      <source srcSet={'/image/course-bg768x261.png'} media={'(max-width: 768px)'}/>
      <source srcSet={'/image/course-bg1024x348.png'} media={'(max-width: 1024px)'}/>
      <img className={style.swift__bg} src={'/image/course-bg1920x652.png'} alt={'images'}/>
    </picture>
    <div className='container'>
      <div className={style.swift__main}>
        <h3 className={style.swift__h}>Why Swift UI Should Be on the Radar of Every Mobile Developer</h3>
        <div className={style.swift__letter}>
          <span className={style.swift__cell}>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </span>
          <span className={style.swift__cell}>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </span>
          <span className={style.swift__cell}>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </span>
          <div className={style.swift__tags}>
            <div className={style.swift__tag}>Affordable</div>
            <div className={style.swift__tag}>Stunning</div>
            <div className={style.swift__tag}>Making</div>
          </div>
        </div>
        <div className={style.swift__basement}>
          <div className={style.swift__profile}>
            <img className={style.swift__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            <div className={style.swift__data}>
              <span className={style.swift__subtitle}>Written by</span>
              <h6 className={style.swift__name}>Lina</h6>
            </div>
          </div>
          <div className={style.swift__action}>
            <BtnDefault text={'Follow'} shape={'rounding'} href={'#'} bg={"transparent-green"}/>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Swift;