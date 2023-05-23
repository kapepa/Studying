import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Purchase from "../../section/Purchase";
import Recommended from "../../section/Recommended";
import {SlideInterface} from "../../interface/SlideInterface";
import Footer from "../../section/Footer";

const Course: NextPage = () => {
  const sliderRecommended: SlideInterface[] = [
    {
      title: 'AWS Certified solutions Architect',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      images: ['/image/news-two.png'],
      date: new Date(Date.now() * 1000 * 60 * 60 * 24 * 30),
      price: { cost: 120, discount: 80 },
      profile: { name: 'Lina', avatar: ['/image/avatar.png'], job: 'Design' },
    },
    {
      title: 'AWS Certified solutions',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      images: ['/image/notebook.png'],
      date: new Date(Date.now() * 1000 * 60 * 60 * 24 * 30),
      price: { cost: 120, discount: 80 },
      profile: { name: 'Sara', avatar: ['/image/avatar.png'], job: 'Manager' },
    }
  ]

  return <Default title="Course">
    <div className={styles.course}>
      <PanelNav theme={'dark'}/>
      <Purchase/>
      <div className='lightblue'>
        <div className='container'>
          <Recommended slides={sliderRecommended}/>
        </div>
      </div>
      <div className="darkblue">
        <div className='container'>
          <Footer />
        </div>
      </div>
    </div>
  </Default>
}

export default Course;