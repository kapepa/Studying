import {FC} from "react";
import style from "./style.module.scss";
import InputSearch from "../../component/InputSearch";

const Scan: FC = () => {
  return <section className={style.scan}>
    <picture>
      <source srcSet={"/image/classroom425x284.png"} media={"(max-width: 425px)"}/>
      <source srcSet={"/image/classroom768x513.png"} media={"(max-width: 768px)"}/>
      <source srcSet={"/image/classroom1024x684.png"} media={"(max-width: 1024px)"}/>
      <img className={style.scan__bg} src={"/image/classroom.png"} alt={"bg"}/>
    </picture>
    <div className="container">
      <div className={style.scan__area}>
        <InputSearch cd={(search: string) => console.log(search)}/>
      </div>
    </div>
  </section>
}

export default Scan;