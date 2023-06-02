import {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";
import Link from "next/link";

const Assistant: FC = () => {
  return <section className={style.assistant}>
    <div className={style.assistant__area}>
      <img className={style.assistant__bg} src={"/image/notebook-desk.jpg"} alt={"bg"}/>
      <div className={style.assistant__base}>
        <div className={style.assistant__picture}>
          <div className={style.assistant__carpet}>
            <img className={style.assistant__face} src={"/image/community_people_two.png"} alt={"assistant"}/>
          </div>
        </div>
        <div className={style.assistant__more}>
          <div className={style.assistant__top}>
            <div className={style.assistant__info}>
              <h5 className={style.assistant__h}>John Anderson</h5>
              <span className={style.assistant__subtitle}>Assistant Professor at Mcmaster University</span>
            </div>
            <BtnDefault text={"Enroll Now"} shape={"rounding"} bg={"light-green"} click={() => {}}/>
          </div>
          <span className={style.assistant__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud</span>
          <div className={style.assistant__additional}>
            <Link className={style.assistant__link} href={"/"}>
              <img className={style.assistant__ico} src={"/svg/twitter-green.svg"} alt={'twitter'}/>
            </Link>
            <Link className={style.assistant__link} href={"/"}>
              <img className={style.assistant__ico} src={"/svg/youtube-green.svg"} alt={'youtube'}/>
            </Link>
            <Link className={style.assistant__link} href={"/"}>
              <img className={style.assistant__ico} src={"/svg/instagram-green.svg"} alt={'instagram'}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Assistant;