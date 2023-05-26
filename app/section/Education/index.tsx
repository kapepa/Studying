import {FC} from "react";
import style from "./style.module.scss";

const Education: FC = () => {
  return <section className={style.education}>
    <h5 className='h-bold'>Top Education offers and deals are listed here</h5>
    <div className={style.education__deals}>

      <div className={style.education__deal}>
        <img className={style.education__bg} src={'/image/news-one.png'} alt={"img"}/>
        <div className={style.education__inner}>
          <div className={style.education__square}>50%</div>
          <h6 className={style.education__h}>Lorem ipsum dolor</h6>
          <span className={style.education__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>

      <div className={style.education__deal}>
        <img className={style.education__bg} src={'/image/news-two.png'} alt={"img"}/>
        <div className={style.education__inner}>
          <div className={style.education__square}>10%</div>
          <h6 className={style.education__h}>Lorem ipsum dolor</h6>
          <span className={style.education__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>

      <div className={style.education__deal}>
        <img className={style.education__bg} src={'/image/news-four.png'} alt={"img"}/>
        <div className={style.education__inner}>
          <div className={style.education__square}>50%</div>
          <h6 className={style.education__h}>Lorem ipsum dolor</h6>
          <span className={style.education__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
        </div>
      </div>

    </div>
  </section>
}

export default Education;