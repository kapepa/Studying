import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Reading: FC = () => {
  const clickTechnology = (technology: string) => {
    console.log(technology);
  }

  return <section className={style.reading}>
    <h4 className="h-bold">Reading blog list</h4>
    <div className={style.reading__list}>

      <div className={style.reading__technology}>
        <img className={style.reading__images} src={"/image/ux-ui.png"} alt="ux/ui"/>
        <div className={style.reading__action}>
          <BtnDefault text={"UX/UI"} click={() => {clickTechnology("UX/UI")}} shape={'rounding'}/>
        </div>
      </div>

      <div className={style.reading__technology}>
        <img className={style.reading__images} src={"/image/react.png"} alt="ux/ui"/>
        <div className={style.reading__action}>
          <BtnDefault text={"React"} click={() => {clickTechnology("React")}} shape={'rounding'}/>
        </div>
      </div>

      <div className={style.reading__technology}>
        <img className={style.reading__images} src={"/image/php.png"} alt="ux/ui"/>
        <div className={style.reading__action}>
          <BtnDefault text={"PHP"} click={() => {clickTechnology("PHP")}} shape={'rounding'}/>
        </div>
      </div>

      <div className={style.reading__technology}>
        <img className={style.reading__images} src={"/image/javascript.png"} alt="ux/ui"/>
        <div className={style.reading__action}>
          <BtnDefault text={"JavaScript"} click={() => {clickTechnology("javascript")}} shape={'rounding'}/>
        </div>
      </div>

    </div>
  </section>
};

export default Reading;
