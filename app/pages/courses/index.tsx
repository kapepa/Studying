import React from "react";
import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import Lesson from "../../section/Lesson";
import Choice from "../../section/Choice";
import Recommended from "../../section/Recommended";
import {SlideInterface} from "../../interface/SlideInterface";
import Online from "../../section/Online";
import Footer from "../../section/Footer";

const Courses: NextPage = () => {
  const sliderRecommended: SlideInterface[] = [
    {
      title: 'AWS Certified solutions Architect',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      images: ['/image/news-two.png'],
      date: new Date(Date.now() * 1000 * 60 * 60 * 24 * 30),
      price: { cost: 100, discount: 80 },
      profile: { name: 'Lina', avatar: ['/image/avatar.png'], job: 'Design' },
    },
    {
      title: 'AWS Certified solutions',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      images: ['/image/notebook.png'],
      date: new Date(Date.now() * 1000 * 60 * 60 * 24 * 30),
      price: { cost: 100, discount: 80 },
      profile: { name: 'Sara', avatar: ['/image/avatar.png'], job: 'Manager' },
    }
  ]

  return <Default title={'Course'}>
    <div className={styles.courses}>
      <PanelNav theme={'dark'}/>
      <div className='lightblue'>
        <header className='container'>
          <Lesson/>
        </header>
      </div>
      <div className='container'>
        <Choice/>
      </div>
      <div className='lightblue'>
        <div className='container'>
          <Recommended slides={sliderRecommended}/>
        </div>
      </div>
      <div className="darkblue">
        <div className='container'>
          <Footer/>
        </div>
      </div>
    </div>
  </Default>
}

export default Courses;