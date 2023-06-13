import React, {FC, useRef} from "react";
import style from "./style.module.scss";

const Coaching: FC = () => {
  const cellRef = useRef<HTMLDivElement>(null);

  const clickOpenClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const cell = e.currentTarget.closest(`.${style.coaching__cell}`)
    const stretch = cell.querySelector(`.${style.coaching__stretch}`);
    const arrow = cell.closest(`.${style.coaching__cell}`).querySelector(`.${style.coaching__arrow}`);

    stretch.classList.toggle(`${style['coaching__stretch--open']}`);
    arrow.classList.toggle(`${style['coaching__arrow--open']}`)

    if(!!cellRef.current && cellRef.current !== cell){
      const oldCell = cellRef.current;
      const oldStretch = oldCell.querySelector(`.${style.coaching__stretch}`);
      const oldSArrow = oldCell.closest(`.${style.coaching__cell}`).querySelector(`.${style.coaching__arrow}`);

      oldStretch.classList.remove(`${style['coaching__stretch--open']}`);
      oldSArrow.classList.remove(`${style['coaching__arrow--open']}`)
    }

    cellRef.current = cell as HTMLDivElement;
  }

  return <section className={style.coaching}>
    <h4 className={style.coaching__h}>Online coaching lessons for remote learning</h4>
    <div className={style.coaching__accordion}>

      <div className={style.coaching__cell}>
        <div className={style.coaching__cap} onClick={clickOpenClose} role="cell-accordion-click">
          <span className={style.coaching__subject}>Lorem ipsum dolor sit amet</span>
          <div className={style.coaching__arrow}/>
        </div>
        <div className={style.coaching__stretch} role="cell-accordion-open">
          <span className={style.coaching__more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div className={style.coaching__cell}>
        <div className={style.coaching__cap} onClick={clickOpenClose}>
          <span className={style.coaching__subject}>Lorem ipsum dolor sit amet</span>
          <div className={style.coaching__arrow}/>
        </div>
        <div className={style.coaching__stretch}>
          <span className={style.coaching__more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</span>
        </div>
      </div>

      <div className={style.coaching__cell}>
        <div className={style.coaching__cap} onClick={clickOpenClose}>
          <span className={style.coaching__subject}>Consectetur adipiscing elit, sed do </span>
          <div className={style.coaching__arrow}/>
        </div>
        <div className={style.coaching__stretch}>
          <span className={style.coaching__more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div className={style.coaching__cell}>
        <div className={style.coaching__cap} onClick={clickOpenClose}>
          <span className={style.coaching__subject}>Eiusmod tempos Lorem ipsum</span>
          <div className={style.coaching__arrow}/>
        </div>
        <div className={style.coaching__stretch}>
          <span className={style.coaching__more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div className={style.coaching__cell}>
        <div className={style.coaching__cap} onClick={clickOpenClose}>
          <span className={style.coaching__subject}>Lorem ipsum dolor sit amett</span>
          <div className={style.coaching__arrow}/>
        </div>
        <div className={style.coaching__stretch}>
          <span className={style.coaching__more}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet</span>
        </div>
      </div>

    </div>
  </section>
}

export default Coaching;