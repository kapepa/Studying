import {GetServerSideProps, NextPage,} from "next";
import React from "react";
import style from "./style.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import Learning from "../../section/Learning";
import Reading from "../../section/Reading";
import Related from "../../section/Related";
import Marketing from "../../section/Marketing";
import Footer from "../../section/Footer";
import {OffersInterface} from "../../interface/OffersInterface";
import {TechnologyInterface} from "../../interface/TechnologyInterface";

interface InterfaceBlog {
  offers: OffersInterface[],
  technology: TechnologyInterface[]
}

const Blog: NextPage<InterfaceBlog> = ({offers, technology}) => {
  return <Default title={'Blog'} >
    <main className={style.blog}>
      <PanelNav theme={'dark'}/>
      <header className={`${style.blog__learning}`}>
        <div className='container'>
          <Learning/>
        </div>
      </header>
      <div className='container'>
        <Reading technology={technology}/>
      </div>
      <div className={`${style.blog__related}`}>
        <div className='container'>
          <Related/>
        </div>
      </div>
      <div className='container'>
        <Marketing offers={offers}/>
      </div>
      <div className={style['blog__footer']}>
        <div className="container">
          <Footer/>
        </div>
      </div>
    </main>
  </Default>;
}

export const getServerSideProps: GetServerSideProps<InterfaceBlog> = async () => {
  const offers: OffersInterface[] = [
    {
      img: "/image/news-two.png",
      term: "3 Month",
      profession: "Design",
      title: "Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 100,
      discount: 20,
      user: {
        name: "Lina",
        avatar: "/image/avatar.png"
      }
    },
    {
      img: "/image/news-three.png",
      term: "3 Month",
      profession: "Design",
      title: "AWS Certified",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 100,
      discount: 20,
      user: {
        name: "Lina",
        avatar: "/image/avatar.png"
      }
    },
    {
      img: "/image/news-one.png",
      term: "3 Month",
      profession: "Design",
      title: "AWS Certified Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 100,
      discount: 20,
      user: {
        name: "Lina",
        avatar: "/image/avatar.png"
      }
    },
    {
      img: "/image/news-four.png",
      term: "3 Month",
      profession: "Design",
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      price: 100,
      discount: 20,
      user: {
        name: "Lina",
        avatar: "/image/avatar.png"
      }
    },
  ];
  const technology: TechnologyInterface[] = [
    {img: "ux-ui.png", name: "UX/UI"},
    {img: "react.png", name: "React"},
    {img: "php.png", name: "PHP"},
    {img: "javascript.png", name: "JavaScript"},
  ]

  return { props: { offers, technology } }
}


export default Blog;