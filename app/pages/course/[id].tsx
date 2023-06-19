import {GetServerSideProps, NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Purchase from "../../section/Purchase";
import Recommended from "../../section/Recommended";
import {SlideInterface} from "../../interface/SlideInterface";
import Footer from "../../section/Footer";
import {PurchaseInterface} from "../../interface/PurchaseInterface";

interface CourseInterface {
  purchase: PurchaseInterface,
  slides: SlideInterface[],
}

const Course: NextPage<CourseInterface> = ({purchase, slides}) => {
  return <Default title="Course">
    <div className={styles.course}>
      <PanelNav theme={'dark'}/>
      <Purchase purchase={purchase}/>
      <div className='lightblue'>
        <div className='container'>
          <Recommended slides={slides}/>
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

export const getServerSideProps: GetServerSideProps<CourseInterface> = async () => {
  const purchase: PurchaseInterface = {
    rating: { 1: 3, 2: 4, 3: 6, 4: 5, 5: 1 },
    comments: [
      {
        text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively integrates exclusively",
        created_at: Date.now() - (1000 * 60 * 60 * 24 * 30),
        user: { name: "Lina", avatar: "avatar.png" }
      },
      {
        text: "Launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Less than a year ago by Blackboard",
        created_at: Date.now() - (1000 * 60 * 60 * 24 * 65),
        user: { name: "Alina", avatar: "avatar.png" }
      }
    ],
    price: {
      discount: 50,
      value: 100,
    }
  };

  const slides: SlideInterface[] = [
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

  return { props: { purchase, slides } }
}

export default Course;