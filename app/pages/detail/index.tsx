import {GetServerSideProps, NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Swift from "../../section/Swift";
import Related from "../../section/Related";
import Footer from "../../section/Footer";
import {RelatedInterface} from "../../interface/RelatedInterface";

interface DetailPage {
  related: RelatedInterface[]
}

const Detail: NextPage<DetailPage> = ({related}) => {
  return <Default title={'Detail'}>
    <div className={styles.detail}>
      <PanelNav theme={'dark'}/>
      <Swift />
      <div className='lightblue'>
        <div className='container'>
          <Related related={related}/>
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

export const getServerSideProps: GetServerSideProps<DetailPage> = async () => {
  const related: RelatedInterface[] = [
    {
      id: Date.now().toString(),
      img: "card-one.png",
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      user: { name: "Lina", avatar: "avatar.png" },
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Blackboard co-founder.",
      looked: 1200,
    },
    {
      id: Date.now().toString(),
      img: "card-two.png",
      title: "Zoom-friendly edtech solution. Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      user: { name: "Alina", avatar: "avatar.png" },
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.",
      looked: 2200,
    },
    {
      id: Date.now().toString(),
      img: "card-one.png",
      title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      user: { name: "Lina", avatar: "avatar.png" },
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively. Blackboard co-founder.",
      looked: 1200,
    },
  ];
  return { props: { related } }
}

export default Detail;