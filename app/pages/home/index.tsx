import React from "react";
import {GetServerSideProps, NextPage} from "next";
import Default from "../../core/layouts/default/index";
import PanelNav from "../../component/PanelNav/index";
import styles from "./styles.module.scss";
import Presentation from "../../section/Presentation";
import OurSuccess from "../../section/OurSuccess";
import Software from "../../section/Software";
import Platform from "../../section/Platform";
import Features from "../../section/Features";
import Explore from "../../section/Explore";
import Review from "../../section/Review";
import News from "../../section/News";
import Footer from "../../section/Footer";
import {NewsInterface} from "../../interface/NewsInterface";
import {AchievementInterface} from "../../interface/AchievementInterface";
import {SoftwareInterface} from "../../interface/SoftwareInterface";

interface HomeInterface {
  news: NewsInterface[],
  software: SoftwareInterface[],
  achievement: AchievementInterface,
}

const Home: NextPage<HomeInterface> = ({news, achievement, software}) => {
  return (
    <Default title="Home">
      <div className={styles.home}>
        <div className={styles.home__sheet}>
          <picture>
            <source srcSet={"/image/girl-small.png"} media="(max-width: 768px)" />
            <source srcSet={"/image/girl-middle.png"} media="(max-width: 1024px)" />
            <img className={styles['home__img-bg']} src={"/image/girl-large.png"} alt='girl'/>
          </picture>
        </div>
        <PanelNav theme={'light'}/>
        <div className="container">
          <header className={styles.home__header}>
            <Presentation/>
          </header>
        </div>
      </div>
      <main className={styles.home__main}>
        <div className="container">
          <OurSuccess achievement={achievement}/>
        </div>
        <div className="container">
          <Software software={software}/>
        </div>
        <div className="container">
          <Platform/>
        </div>
        <div className="container">
          <Features/>
        </div>
        <div className={styles['home__explore-bg']}>
          <div className="container">
            <Explore/>
          </div>
        </div>
        <div className="container">
          <Review />
        </div>
        <div className="container">
          <News main={news[0]} list={news.slice(1)}/>
        </div>
        <div className={styles['home__footer']}>
          <div className="container">
            <Footer />
          </div>
        </div>
      </main>
    </Default>
  );
}

export const getServerSideProps: GetServerSideProps<HomeInterface> = async () => {
  const news: NewsInterface[] = [
    {
      id: `${Math.random() * 1000}`,
      img: "/image/news-one.png",
      type: "news",
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
    },
    {
      id: `${Math.random() * 1000}`,
      img: "/image/news-two.png",
      type: "press release",
      title: "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      desc: "Zoom was never created to be a consumer product. Nonetheless, the created to be a consumer product",
    },
    {
      id: `${Math.random() * 1000}`,
      img: "/image/news-three.png",
      type: "news",
      title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      desc: "Class Technologies Inc., the company that created Class, the created to be a consumer product",
    },
    {
      id: `${Math.random() * 1000}`,
      img: "/image/news-four.png",
      type: "news",
      title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      desc: "This year, investors have reaped big financial returns from betting on Zoom",
    },
  ];
  const software: SoftwareInterface[] = [
    {
      img: "doc.svg",
      title: "Online Billing, Invoicing, & Contracts",
      text: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts, financial and legal",
    },
    {
      img: "date.svg",
      title: "Easy Scheduling & Attendance Tracking",
      text: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    },
    {
      img: "community.svg",
      title: "Customer Tracking",
      text: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
    },
  ]
  const achievement: AchievementInterface = {students: 15500, success: 75, questions: 35, experts: 26, experience: 16};

  return { props: { news: news, achievement: achievement, software } }
}

export default Home;