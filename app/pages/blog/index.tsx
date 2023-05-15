import { NextPage } from "next";
import React from "react";
import style from "./style.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import Learning from "../../section/Learning";
import Reading from "../../section/Reading";
import Related from "../../section/Related";

interface InterfaceBlog {

}

const Blog: NextPage<InterfaceBlog> = () => { 

  return <Default title={'Blog'} >
    <main className={style.blog}>
      <PanelNav theme={'dark'}/>
      <header className={`${style.blog__learning}`}>
        <div className='container'>
          <Learning/>
        </div>
      </header>
      <div className='container'>
        <Reading/>
      </div>
      <div className={`${style.blog__related}`}>
        <div className='container'>
          <Related/>
        </div>
      </div>
    </main>
  </Default>;
}

export default Blog;