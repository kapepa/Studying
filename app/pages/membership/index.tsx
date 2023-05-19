import {NextPage} from "next";
import Default from "../../core/layouts/default";
import styles from "./styles.module.scss";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Pricing from "../../section/Pricing";
import Online from "../../section/Online";
import Coaching from "../../section/Coaching";
import Students from "../../section/Students";

const Membership: NextPage = () => {
  return <Default title={'Membership'}>
    <main className={styles.membership}>
      <PanelNav theme={'dark'}/>
      <header className='container'>
        <Pricing />
      </header>
      <div className='container'>
        <Online />
      </div>
      <div className='container'>
        <Coaching />
      </div>
      <div className={styles['membership__bg-gray']}>
        <div className='container'>
          <Students />
        </div>
      </div>
    </main>
  </Default>
}

export default Membership;