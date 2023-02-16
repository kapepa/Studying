import React, { FC, ReactNode } from "react"
import Default from "../../core/layouts/default/index"
import PanelNav from "../../component/PanelNav/index"
import styles from "./styles.module.scss";


const Home: FC = () => {
  return (
    <Default title="Home">
      <div className={styles.home}>
        <div className={styles.home__sheet}>
          <PanelNav/>
          <div className={( "container")}>
            <main className={styles.home__main}>
              Home
              <div className="">
                
              </div>
            </main>
          </div>
      
        </div>
      </div>
    </Default>
  );
}

export default Home;