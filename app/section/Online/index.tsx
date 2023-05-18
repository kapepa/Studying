import {FC} from "react";
import style from './style.module.scss';
import BtnDefault from "../../component/BtnDefault";

const Online: FC = () => {
  return <section className={style.online}>
    <h4 className={style.online__h}>Online coaching lessons for remote learning.</h4>
    <span className={style.online__span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</span>
    <div>
      <BtnDefault text={'Start learning now'} shape={'rounding'} bg={'light-green'}/>
    </div>
  </section>
}

export default Online;