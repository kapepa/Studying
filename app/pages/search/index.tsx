import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Scan from "../../section/Scan";
import About from "../../section/About";
import Real from "../../section/Real";

const Search: NextPage = () => {
  return <Default title={'Search'}>
    <div className={styles.search}>
      <PanelNav theme={'dark'}/>
      <Scan/>
      <div className="container">
        <About/>
      </div>
      <div className="container">
        <Real/>
      </div>
    </div>
  </Default>
}

export default Search;