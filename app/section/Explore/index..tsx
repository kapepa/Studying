import {FC} from "react";
import style from "./style.module.scss";

const Explore: FC = () => {
  return <section className={style.explore}>
    <div className={style.explore__roof}>
      <h4 className={style.explore__h}>Explore Course</h4>
      <span className={style.explore__detailed}>Ut sed eros finibus, placerat orci id, dapibus.</span>
    </div>
    <div className={style['explore__course-list']}>

      <div className={style['e-course']}>
        <div className={style['e-course__cap']}>
          <div className={style['e-course__info']}>
            <img src={'/svg/paint.svg'} className={style['e-course__ico']} alt={'pain'} />
            <span className={style['e-course__span']}>Lorem Ipsum</span>
          </div>
          <a href="#" className={style['e-course__link']}>See all<div className={style['e-course__arrow']} /></a>
        </div>
        <div className={style['e-course__content']}>

          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--orange']}`}>
              <span className={style['e-course__short-name']}>Ut Sed Eros</span>
            </div>
          </div>
          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--pink']}`}>
              <span className={style['e-course__short-name']}>Curabitur Egestas</span>
            </div>
          </div>
          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--brown']}`}>
              <span className={style['e-course__short-name']}>Quisque Conseq…</span>
            </div>
          </div>
          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--yellow']}`}>
              <span className={style['e-course__short-name']}>Cras Convallis</span>
            </div>
          </div>
          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--violet']}`}>
              <span className={style['e-course__short-name']}>Vestibulum fauci…</span>
            </div>
          </div>
          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--lightblue']}`}>
              <span className={style['e-course__short-name']}>Ut Sed Eros</span>
            </div>
          </div>
          <div className={style['e-course__inner-item']}>
            <div className={`${style['e-course__substrate']} ${style['e-course__substrate--green']}`}>
              <span className={style['e-course__short-name']}>Vestibulum faucibu</span>
            </div>
          </div>
          <img className={style['e-course__picture']} alt={'food'} src={'/image/food.png'}/>
        </div>
      </div>

    </div>
  </section>
};

export default Explore;