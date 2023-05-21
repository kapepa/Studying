import {FC} from "react";
import style from "./style.module.scss";

const Choice: FC = () => {
  return <section className={style.choice}>
    <h4 className="h-bold">Choice favourite course from top category</h4>
    <div className={style.choice__profession}>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--green']}`}>
          <img src={'/svg/brush.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Design</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--blue']}`}>
          <img src={'/svg/desktop.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Development</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--lightblue']}`}>
          <img src={'/svg/storage.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Development</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--lightgreen']}`}>
          <img src={'/svg/briefcase.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Business</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--yellow']}`}>
          <img src={'/svg/market.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Marketing</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--red']}`}>
          <img src={'/svg/book.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Photography</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--black']}`}>
          <img src={'/svg/movie.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Acting</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

      <div className={style.choice__cell}>
        <div className={`${style.choice__square} ${style['choice__square--lightgreen']}`}>
          <img src={'/svg/briefcase.svg'} className={style.choice__ico}/>
        </div>
        <h5 className={style.choice__h}>Business</h5>
        <span className={style.choice__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
      </div>

    </div>
  </section>
}

export default Choice;