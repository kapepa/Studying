import {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const About: FC = () => {
  return <section className={style.about}>
    <div className={style.about__area}>
      <div className={style.about__know}>
        <div className={style.about__layers}>
          <h5 className={style.about__h}>Know about learning learning platform</h5>
          <ul className={style.about__ul}>
            <li className={style.about__li}>Free E-book, video & consolation</li>
            <li className={style.about__li}>Top instructors from around world</li>
            <li className={style.about__li}>Top courses from your team</li>
          </ul>
          <div className={style.about__basement}>
            <BtnDefault text={"Start learning now"} href={"#"} shape={"rounding"} bg={"light-green"}/>
          </div>
        </div>
      </div>
      <div className={style.about__possibility}>
        <div className={style.possibility}>
          <img className={style.possibility__board} src={"/image/border.png"} alt={"board"} />
          <div className={style.possibility__community}>
            <div className={style.possibility__teacher}>
              <img className={style['possibility__teacher-avatar']} src={'/image/community_people_one.png'}/>
              <div className={style.possibility__action}>
                <BtnDefault text={"Press"} bg={"blue"} size={"small"} click={() => {}}/>
                <BtnDefault text={"Press"} bg={"red"} size={"small"} click={() => {}}/>
              </div>
            </div>
            <div className={style.possibility__grid}>
              <img className={style.possibility__people} src={"/image/community_people_two.png"} alt={'people'}/>
              <img className={style.possibility__people} src={"/image/community_people_three.png"} alt={'people'}/>
              <img className={style.possibility__people} src={"/image/community_people_four.png"} alt={'people'}/>
              <img className={style.possibility__people} src={"/image/community_people_five.png"} alt={'people'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default About;