import React from "react";
import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import Lesson from "../../section/Lesson";

const Courses: NextPage = () => {
  return <Default title={'Course'}>
    <div className={styles.courses}>
      <PanelNav theme={'dark'}/>
      <div className='lightblue'>
        <header className='container'>
          <Lesson/>
        </header>
      </div>

    </div>
  </Default>
}

export default Courses;