import React, {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";
import {TechnologyInterface} from "../../interface/TechnologyInterface";

interface ReadingFC {
  technology: TechnologyInterface[];
}

const Reading: FC<ReadingFC> = ({ technology }) => {
  const clickTechnology = (technology: string) => {
    // console.log(technology);
  }

  return <section className={style.reading}>
    <h4 className="h-bold">Reading blog list</h4>
    <div className={style.reading__list}>

      { technology.map(( tech: TechnologyInterface, index: number) => (
        <div className={style.reading__technology} key={`${tech.name}-${index}`} role="tech">
          <img className={style.reading__images} src={`/image/${tech.img}`} alt="ux/ui"/>
          <div className={style.reading__action}>
            <BtnDefault text={tech.name} click={() => {clickTechnology(tech.name)}} shape={'rounding'}/>
          </div>
        </div>
      )) }

    </div>
  </section>
};

export default Reading;
