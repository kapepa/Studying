import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";
import BtnPlay from "../../component/BtnPlay";

const Platform: FC = () => {
  const clickInstruction = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('Instruction')
  }

  const clickStudents = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('Students')
  }

  const clickVideo = (bool: boolean) => {
    // console.log('clickVideo', bool)
  }

  return <section className={style.platform}>
    <div className={style.platform__header}>
      <h3 className={'cap__header'}><span className={'cap__header--highlight'}>What is</span> TOTC?</h3>
      <span className={'cap__detailed'}>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</span>
    </div>
    <div className={style.platform__choice}>

      <div className={style['choice-card']}>
        <picture>
          <source srcSet={'/image/instructors400x267.png'} media={'(max-width: 768px)'} />
          <img className={style['choice-card__picture']} src={'/image/instructors.png'} alt={'instructors'} />
        </picture>
        <div className={style['choice-card__area']}>
          <h5 className={style['choice-card__h5']}>FOR INSTRUCTORS</h5>
          <BtnDefault text='Start a class today' click={clickInstruction} size={'large'} bg={'transparent'}/>
        </div>
      </div>

      <div className={style['choice-card']}>
        <picture>
          <source srcSet={'/image/student400x267.png'} media={'(max-width: 768px)'} />
          <img className={style['choice-card__picture']} src={'/image/student.png'} alt={'instructors'} />
        </picture>
        <div className={style['choice-card__area']}>
          <h5 className={style['choice-card__h5']}>FOR STUDENTS</h5>
          <BtnDefault text='Enter access code' click={clickStudents} size={'large'} bg={'transparent'}/>
        </div>
      </div>

    </div>
    <div className={style.platform__basement}>
      <div className={style.platform__management}>
        <h3 className={'cap__header cap__header--left'}><span className={'cap__header--highlight'}> Everything you can do in a physical classroom,</span> you can do with TOTC</h3>
        <span className={'cap__detailed cap__detailed--left'}>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</span>
        <a href='#' className={style.platform__link}>Learn more</a>
      </div>
      <div className={style.platform__play}>
        <img src={'/image/classroom.png'} className={style.platform__video} alt='video'/>
        <BtnPlay size={70} cb={clickVideo} sizeTriangle={'large'}/>
      </div>
    </div>
  </section>
}

export default Platform;