import {NextPage} from "next";
import styles from "./styles.module.scss";
import Default from "../../core/layouts/default";
import PanelNav from "../../component/PanelNav";
import React from "react";
import Assistant from "../../section/Assistant";
import Exhibition from "../../section/Exhibition";

const Literature: NextPage = () => {
  let array = new Array([
    { name: "All Benefits of PLUS", price: 24, img: "9de0848e8427987799b35a9bfaa8e9fc.jpg" },
    { name: "All Benefits of PLUSa", price: 28, img: "6577b4fca48ecb13081713fd8aba3ed0.png" },
    { name: "All Benefits of PLUSd", price: 34, img: "ac446cfcc084938438a50a466db19072.jpg" },
    { name: "All Benefits of PLUSc", price: 65, img: "db1349de6a66fd26c1b9a3086cc24013.jpg" },
    { name: "All Benefits of PLUSb", price: 28, img: "8411c50b458c1e969e8ca5d03812d711.jpg" },
    // { name: "All Benefits of PLUSj", price: 34, img: "ac446cfcc084938438a50a466db19072.jpg" },
  ])

  let lot = new Array(20).fill(array).flat(Infinity);

  return <Default title={"Literature"}>
    <div className={styles.literature}>
      <PanelNav theme={'dark'}/>
      <div className="container">
        <Assistant/>
      </div>
      <div className="container">
        <Exhibition subject={["About", "Course", "Notes", "Project", "Podcast", "Book", "Review"]} lot={lot} lotLength={lot.length}/>
      </div>
    </div>
  </Default>
}

export default Literature;