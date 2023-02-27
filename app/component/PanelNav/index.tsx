import classNames from "classnames";
import Link from "next/link";
import React, { FC, useState } from "react";
import BtnDefault from "../BtnDefault";
import styles from "./styles.module.scss";

const PanelNav: FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const mobileCLass = classNames({[styles['panel__hamburger--x']]: nav})

  const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Login")
  }

  const onSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Sign in')
  }

  const onMobileMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    setNav(!nav);
  }

  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel__toolbar}>
          <Link href="/home">
            <div className={styles.panel__login}></div>
          </Link>
          <div className={styles.panel__interaction}>
            <nav className={styles.panel__nav}>
              <Link className={styles.panel__link} href={"/home"}>Home</Link>
              <Link className={styles.panel__link} href={"/courses"}>Courses</Link>
              <Link className={styles.panel__link} href={"/careers"}>Careers</Link>
              <Link className={styles.panel__link} href={"/blog"}>Blog</Link>
              <Link className={styles.panel__link} href={"/about"}>About Us</Link>
            </nav>
            <div className={styles.panel__auth}>
              <BtnDefault click={onLogin} text="Login" />
              <BtnDefault click={onSignIn} text="Sign Up" />
            </div>
            <div className={styles.panel__mobile}>
              <div className={`${styles.panel__hamburger} ${mobileCLass}`} onClick={onMobileMenu}>
              	<span className={styles['panel__hamburger-row']}></span>
		            <span className={styles['panel__hamburger-row']}></span>
		            <span className={styles['panel__hamburger-row']}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelNav