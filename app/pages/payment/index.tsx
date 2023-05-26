import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Acquisition from "../../section/Acquisition";
import Education from "../../section/Education";

const Payment: NextPage = () => {
  return <Default title={"Payment"}>
    <div className={styles.payment}>
      <PanelNav theme={'dark'}/>
      <div className="container">
        <Acquisition/>
      </div>
      <div className="container">
        <Education/>
      </div>
    </div>
  </Default>
}

export default Payment;