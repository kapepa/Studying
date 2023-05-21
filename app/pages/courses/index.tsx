import React from "react";
import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import Lesson from "../../section/Lesson";
import Choice from "../../section/Choice";
import Recommended from "../../section/Recommended";

const Courses: NextPage = () => {
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
          <Recommended/>
        </div>
      </div>
    </div>
  </Default>
}

export default Courses;