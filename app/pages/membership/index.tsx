import {GetServerSideProps, NextPage} from "next";
import Default from "../../core/layouts/default";
import styles from "./styles.module.scss";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Pricing from "../../section/Pricing";
import Online from "../../section/Online";
import Coaching from "../../section/Coaching";
import Students from "../../section/Students";
import IsApp from "../../section/IsApp";
import Footer from "../../section/Footer";
import {PricingInterface} from "../../interface/PricingInterface";

interface MembershipPage {
  pricing: PricingInterface[],
}

const Membership: NextPage<MembershipPage> = ({pricing}) => {
  return <Default title={'Membership'}>
    <main className={styles.membership}>
      <PanelNav theme={'dark'}/>
      <header className='container'>
        <Pricing pricing={pricing}/>
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
      <div className='container'>
        <IsApp />
      </div>
      <div className={styles['membership__footer']}>
        <div className="container">
          <Footer />
        </div>
      </div>
    </main>
  </Default>
}

export const getServerSideProps: GetServerSideProps<MembershipPage> = async () => {
  const pricing: PricingInterface[] = [
    {
      type: "like",
      subtitle: "",
      term: "forever",
      price: 0,
      capability: ["Components-driven system", "Sales-boosting landing pages", "Awesome Feather icons pack"],
      detailed: "Try for free",
    },
    {
      type: "individual",
      subtitle: "best!",
      term: "month",
      price: 24,
      capability: ["Components-driven system", "Sales-boosting landing pages", "Awesome Feather icons pack", "Themed into 3 different styles", "Will help to learn Figma"],
      detailed: "Regular license",
    },
    {
      type: "corporate",
      subtitle: "",
      term: "editor",
      price: 24,
      capability: ["Components-driven system", "Sales-boosting landing pages", "Awesome Feather icons pack", "Themed into 3 different styles"],
      detailed: "Regular license",
    }
  ]
  return { props: { pricing } }
}

export default Membership;