import classNames from "classnames";
import Link from "next/link";
import React, {FC, useCallback, useContext, useEffect, useState} from "react";
import BtnDefault from "../BtnDefault";
import styles from "./styles.module.scss";
import {BodyLayout} from "../../core/layouts/default";

const PanelNav: FC = () => {
  const bodyLayout = useContext(BodyLayout);
  const [nav, setNav] = useState<boolean>(false);
  const mobileBtnCLass = classNames({[styles['panel__hamburger--x']]: nav});
  const mobileMobileCLass = classNames({[styles['panel__position--open']]: nav});

  let windowClose = useCallback(() => bodyLayout.bodyClick(() => setNav(!nav)), [nav, bodyLayout.bodyClick])

  const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Login")
  }

  const onSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Sign in')
  }

  const onMobileMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    setNav(!nav);

  }

  useEffect(() => {
    // if(bodyLayout.bodyClick && nav) setNav(false);
    if( nav ) setNav(!nav);
    console.log(nav, bodyLayout.bodyClick)
  }, [windowClose])

  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel__toolbar}>
          <Link href="/home">
            <div className={styles.panel__login}/>
          </Link>
          <div className={styles.panel__interaction}>
            <div className={`${styles.panel__position} ${mobileMobileCLass}`}>
              <nav className={styles.panel__nav}>
                <Link className={styles.panel__link} href={"/home"}>Home</Link>
                <Link className={styles.panel__link} href={"/courses"}>Courses</Link>
                <Link className={styles.panel__link} href={"/careers"}>Careers</Link>
                <Link className={styles.panel__link} href={"/blog"}>Blog</Link>
                <Link className={styles.panel__link} href={"/about"}>About Us</Link>
              </nav>
            </div>
            <div className={styles.panel__auth}>
              <BtnDefault click={onLogin} text="Login" />
              <BtnDefault click={onSignIn} text="Sign Up" />
            </div>
            <div className={styles.panel__mobile}>
              <div className={`${styles.panel__hamburger} ${mobileBtnCLass}`} onClick={onMobileMenu}>
              	<span className={styles['panel__hamburger-row']}/>
		            <span className={styles['panel__hamburger-row']}/>
		            <span className={styles['panel__hamburger-row']}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelNav