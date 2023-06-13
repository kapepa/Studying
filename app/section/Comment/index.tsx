import {FC} from "react";
import style from "./style.module.scss";
import Link from "next/link";

const Comment: FC = () => {
  return <section className={style.comment}>
    <h5 className="h-bold">What our students have to say</h5>
    <div className={style.comment__frame}>

      <div className={style.comment__circle}>
        <img className={style.comment__avatar} src={"/image/BrendaFull.png"} alt={"avatar"}/>
        <div className={style.comment__decorate}/>
      </div>

      <div className={style.comment__share}>
        <div className={style.comment__nested}>
          <h5 className={style.comment__name}>Savannah Nguyen</h5>
          <span className={style.comment__email}>tanya.hill@example.com</span>
          <div className={style.comment__letter}>
            <span className={style.comment__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
            <span className={style.comment__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
            <span className={style.comment__span}>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
          </div>
          <div className={style.comment__social}>
            <Link className={style.comment__link} href="/">
              <img className={style.comment__ico} src={'/svg/twitter.svg'} alt={'twitter'}/>
            </Link>
            <Link className={style.comment__link} href="/">
              <img className={style.comment__ico} src={'/svg/facebook.svg'} alt={'facebook'}/>
            </Link>
            <Link className={style.comment__link} href="/">
              <img className={style.comment__ico} src={'/svg/instagram.svg'} alt={'instagram'}/>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.comment__community}>
        <div>
          <Link className={style.comment__people} href={"/"}>
            <img className={style.comment__face} src={"/image/community_people_three.png"} alt={"people face"}/>
          </Link>
        </div>
        <div>
          <Link className={style.comment__people} href={"/"}>
            <img className={style.comment__face} src={"/image/community_people_five.png"} alt={"people face"}/>
          </Link>
        </div>
        <div>
          <Link className={style.comment__people} href={"/"}>
            <img className={style.comment__face} src={"/image/community_people_two.png"} alt={"people face"}/>
          </Link>
        </div>
        <div>
          <Link className={style.comment__people} href={"/"}>
            <img className={style.comment__face} src={"/image/community_people_four.png"} alt={"people face"}/>
          </Link>
        </div>
      </div>

    </div>
  </section>
}

export default Comment;