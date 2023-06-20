import React, {FC, useCallback, useState} from "react";
import style from "./style.module.scss";
import InputSearch from "../../component/InputSearch";
import axios from "axios";

const Scan: FC = () => {
  let [search, setSearch] = useState<string>();

  const clickSubject = async (e: React.MouseEvent<HTMLDivElement>) => {
    try {
      const search: string = e.target['dataset']['search'];
      await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setSearch(search);
    } catch (e) {
      console.error(e)
    }
  }

  const onChange = (search: string) => {

  }

  const toSearch = useCallback(() => {
    return search;
  }, [search])

  return <section className={style.scan}>
    <picture>
      <source srcSet={"/image/classroom425x284.png"} media={"(max-width: 425px)"}/>
      <source srcSet={"/image/classroom768x513.png"} media={"(max-width: 768px)"}/>
      <source srcSet={"/image/classroom1024x684.png"} media={"(max-width: 1024px)"}/>
      <img className={style.scan__bg} src={"/image/classroom.png"} alt={"bg"}/>
    </picture>
    <div className="container">
      <div className={style.scan__area}>
        <InputSearch cd={onChange} toSearch={toSearch()}/>
        <div className={style['scan__find-list']}>
          <div onClick={clickSubject} className={style['scan__find-cell']} data-search={'subject'}>Subject</div>
          <div onClick={clickSubject} className={style['scan__find-cell']} data-search={'partner'}>Partner</div>
          <div onClick={clickSubject} className={style['scan__find-cell']} data-search={'program'}>Program</div>
          <div onClick={clickSubject} className={style['scan__find-cell']} data-search={'language'}>Language</div>
          <div onClick={clickSubject} className={style['scan__find-cell']} data-search={'abaliability'}>Abaliability</div>
          <div onClick={clickSubject} className={style['scan__find-cell']} data-search={'learning type'}>Learning Type</div>
        </div>
      </div>
    </div>
  </section>
}

export default Scan;