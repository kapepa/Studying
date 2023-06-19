import {GetServerSideProps, NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Scan from "../../section/Scan";
import About from "../../section/About";
import Real from "../../section/Real";
import Comment from "../../section/Comment";
import Footer from "../../section/Footer";
import {RealInterface} from "../../interface/RealInterface";

interface SearchPage {
  real: RealInterface[]
}

const Search: NextPage<SearchPage> = ({real}) => {
  return <Default title={'Search'}>
    <div className={styles.search}>
      <PanelNav theme={'dark'}/>
      <Scan/>
      <div className="container">
        <About/>
      </div>
      <div className="container">
        <Real real={real} />
      </div>
      <div className='lightblue'>
        <div className="container">
          <Comment/>
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

export const getServerSideProps: GetServerSideProps<SearchPage> = async () => {
  const real: RealInterface[] = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor, consectetur adipising elit.",
      user: { name: "Jane", avatar: "community_people_five.png" },
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor, consectetur adipising elit. Lorem ipsum dolor sit amet",
      user: { name: "Adam", avatar: "community_people_three.png" },
    },
    {
      text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
      user: { name: "Tomara", avatar: "community_people_two.png" },
    },
    {
      text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
      user: { name: "Jane", avatar: "community_people_five.png" },
    },
    {
      text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
      user: { name: "Adam", avatar: "community_people_three.png" },
    },
    {
      text: "Consectetur adipising elit, consectetur adipising elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet",
      user: { name: "Tomara", avatar: "community_people_two.png" },
    },
  ]
  return { props: { real } }
}

export default Search;