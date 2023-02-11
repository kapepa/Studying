import Link from "next/link";
import { FC } from "react";
import BtnDefault from "../BtnDefault";
import styles from "./styles.module.scss";

const PanelNav: FC = () => {
  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel__toolbar}>
          <Link href="/home">
            <div className={styles.panel__login}></div>
          </Link>
          <div className="">
            <nav className="">
              <Link href={"/home"}>Home</Link>
              <Link href={"/courses"}>Courses</Link>
              <Link href={"/careers"}>Careers</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/about"}>About Us</Link>
            </nav>
            <div className="">
              <BtnDefault text="Login"/>
              <BtnDefault text="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelNav