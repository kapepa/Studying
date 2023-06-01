import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Assistant from "../../section/Assistant";

const Literature: NextPage = () => {
  return <Default title={"Literature"}>
    <div className={styles.literature}>
      <PanelNav theme={'dark'}/>
      <div className="container">
        <Assistant/>
      </div>
    </div>
  </Default>
}

export default Literature;