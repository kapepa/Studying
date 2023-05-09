import React, { FC } from "react";
import Default from "../../core/layouts/default/index";
import PanelNav from "../../component/PanelNav/index";
import styles from "./styles.module.scss";
import Presentation from "../../section/Presentation";
import OurSuccess from "../../section/OurSuccess/index.";
import Software from "../../section/Software";
import Platform from "../../section/Platform";

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
        <div className="container">
          <header className={styles.home__header}>
            <Presentation/>
          </header>
        </div>
      </div>
      <main className={styles.home__main}>
        <div className="container">
          <OurSuccess/>
        </div>
        <div className="container">
          <Software/>
        </div>
        <div className="container">
          <Platform/>
        </div>
      </main>
    </Default>
  );
}

export default Home;