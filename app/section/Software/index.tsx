import {FC} from "react";
import style from "./style.module.scss";

const Software: FC = () => {
  return <section className={style.software}>
    <div className={style.software__header}>
      <h3 className={'cap__header'}><span className={'cap__header--highlight'}>All-In-One</span> Cloud Software.</h3>
      <span className={'cap__detailed'}>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</span>
    </div>
    <div className={style.software__cards}>

      <div className={style['software-card']}>
        <picture>
          <source srcSet={"/svg/doc.svg"} media="(max-width:1024px)" width={80} height={80}/>
          <img className={style['software-card__picture']} src={"/svg/doc.svg"} alt='symbol' width={100} height={100}/>
        </picture>
        <h4 className={style['software-card__h4']}>Online Billing, Invoicing, & Contracts</h4>
        <span className={style['software-card__span']}>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</span>
      </div>

      <div className={style['software-card']}>
        <picture>
          <source srcSet={"/svg/date.svg"} media="(max-width:1024px)" width={80} height={80}/>
          <img className={style['software-card__picture']} src={"/svg/date.svg"} alt='symbol' width={100} height={100}/>
        </picture>
        <h4 className={style['software-card__h4']}>Easy Scheduling & Attendance Tracking</h4>
        <span className={style['software-card__span']}>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</span>
      </div>

      <div className={style['software-card']}>
        <picture>
          <source srcSet={"/svg/community.svg"} media="(max-width:1024px)" width={80} height={80}/>
          <img className={style['software-card__picture']} src={"/svg/community.svg"} alt='symbol' width={100} height={100}/>
        </picture>
        <h4 className={style['software-card__h4']}>Customer Tracking</h4>
        <span className={style['software-card__span']}>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </span>
      </div>

    </div>
  </section>
};

export default Software;