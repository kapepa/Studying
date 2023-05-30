import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Swift from "../../section/Swift";
import Related from "../../section/Related";
import Footer from "../../section/Footer";

const Detail: NextPage = () => {
  return <Default title={'Detail'}>
    <div className={styles.detail}>
      <PanelNav theme={'dark'}/>
      <Swift />
      <div className='lightblue'>
        <div className='container'>
          <Related/>
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

export default Detail;