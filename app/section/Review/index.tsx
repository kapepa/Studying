import {FC} from "react";
import style from "./style.module.scss";
import BtnDefault from "../../component/BtnDefault";

const Review: FC = () => {


  return <section className={style.review}>
    <div className={style.review__preview}>
      <span className={style.review__title}>TESTIMONIAL</span>
      <h5 className={style.review__h}>What They Say?</h5>
      <span className={style.review__span}>TOTC has got more than 100k positive ratings from our users around the world.</span>
      <span className={style.review__span}>Some of the students and teachers were greatly helped by the Skilline.</span>
      <span className={style.review__span}>Are you too? Please give your assessment</span>
      <div>
        <BtnDefault bg={'green'} text={'Write your assessment'} href={'#'}/>
      </div>
    </div>
    <div className={style.review__client}>
      <img className={style['review__profile-img']} src={'/image/Brenda.png'} alt={'photo profile'}/>
      <div className={style['r-card']}>
        <span className={style['r-card__message']}>{`${"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."}`}</span>
        <div className={style['r-card__basement']}>
          <div className={style['r-card__full-name']}>Gloria Rose</div>
          <div className={style['r-card__rating']}>
            <div className={style['r-card__star-line']}>
              <img className={style['r-card__star']} src={'/svg/star.svg'} alt='star'/>
              <img className={style['r-card__star']} src={'/svg/star.svg'} alt='star'/>
              <img className={style['r-card__star']} src={'/svg/star.svg'} alt='star'/>
              <img className={style['r-card__star']} src={'/svg/star.svg'} alt='star'/>
              <img className={style['r-card__star']} src={'/svg/star.svg'} alt='star'/>
            </div>
            <span className={style['r-card__look']}>12 reviews at Yelp</span>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Review;