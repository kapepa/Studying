import React, { FC } from "react";
import Default from "../../core/layouts/default/index";
import PanelNav from "../../component/PanelNav/index";
import styles from "./styles.module.scss";
import Presentation from "../../section/presentation";

const Home: FC = () => {
  return (
    <Default title="Home">
      <div className={styles.home}>
        <div className={styles.home__sheet}>
          <picture>
            <source srcSet="/image/girl-small.png" media="(max-width: 768px)" />
            <source srcSet="/image/girl-middle.png" media="(max-width: 1024px)" />
            <img className={styles['home__img-bg']} src="/image/girl-large.png" alt='girl'/>
          </picture>
        </div>
        <PanelNav/>
        <div className="container h100">
          <main className={styles.home__main}>
            <Presentation/>
          </main>
        </div>
      </div>
    </Default>
  );
}

export default Home;