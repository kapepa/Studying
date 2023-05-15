import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Learning: FC<any> = () => {
  const clickStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clickStart')
  }

  return <section className={style.learning}>
    <div className={style.learning__content}>
      <span className={style['learning__pre-title']}>By Themadbrains in <span className={style['learning__pre-title--highlight']}>inspiration</span></span>
      <h3 className={style.learning__h}>Why Swift UI Should Be on the Radar of Every Mobile Developer</h3>
      <span className={style.learning__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</span>
      <div>
        <BtnDefault text={'Start learning now'} click={clickStart} bg={"light-green"} shape={'rounding'}/>
      </div>
    </div>
    <div className={style.learning__additional}>
      <img className={style.learning__images} src={'/image/notebook.png'} alt={'img name'}/>
    </div>
  </section>
};

export default Learning;