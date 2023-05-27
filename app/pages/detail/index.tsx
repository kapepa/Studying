import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";

const Detail: NextPage = () => {
  return <Default title={'Detail'}>
    <div className={styles.detail}>
      <PanelNav theme={'dark'}/>

    </div>
  </Default>
}

export default Detail;