import React from "react";
import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";

const Courses: NextPage = () => {
  return <Default title={'Course'}>
    <div className={styles.courses}>
      <PanelNav theme={'dark'}/>
      <header className='container'>
        Course
      </header>
    </div>
  </Default>
}

export default Courses;