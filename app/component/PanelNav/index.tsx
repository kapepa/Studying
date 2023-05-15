import classNames from "classnames";
import Link from "next/link";
import React, {FC, useContext, useEffect, useState} from "react";
import BtnDefault from "../BtnDefault";
import styles from "./styles.module.scss";
import {BodyLayout} from "../../core/layouts/default";

interface PanelNavInterface {
  theme: 'light' | 'dark',
}

const PanelNav: FC<PanelNavInterface> = ({theme}) => {
  const logoPath = theme === 'light' ? '/svg/logo.svg' : '/svg/logo-dark.svg';
  const bodyLayout = useContext(BodyLayout);
  const [nav, setNav] = useState<boolean>(false);
  const mobileBtnCLass = classNames({
    [styles['panel__hamburger--x']]: nav,
    [styles['panel__hamburger--light']]: theme === 'light',
    [styles['panel__hamburger--dark']]: theme === 'dark',
  });
  const mobileMobileCLass = classNames({[styles['panel__position--open']]: nav});
  const themeClass = classNames({
    [styles['panel__link--light']]: theme === 'light',
    [styles['panel__link--dark']]: theme === 'dark',
  })

  const onLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Login")
  }

  const onSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Sign in')
  }

  const onMobileMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    bodyLayout.bodyClick(() => setNav(!nav));
  }

  useEffect(() => {
    if( nav ) setNav(!nav);
  }, [bodyLayout.bodyClick]);

  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel__toolbar}>
          <Link className={styles['panel__login-link']} href="/home">
            <picture>
              <source srcSet={logoPath} media={'(max-width : 425px)'} width={76} height={59}/>
              <source srcSet={logoPath} media={'(max-width : 1024px)'} width={90} height={70}/>
              <img src={logoPath} alt={'logo'} className={styles.panel__login} width={114} height={83}/>
            </picture>
          </Link>
          <div className={`${styles.panel__position} ${mobileMobileCLass}`}>
            <nav className={styles.panel__nav}>
              <Link className={`${styles.panel__link} ${themeClass}`} href={"/home"}>Home</Link>
              <Link className={`${styles.panel__link} ${themeClass}`} href={"/courses"}>Courses</Link>
              <Link className={`${styles.panel__link} ${themeClass}`} href={"/careers"}>Careers</Link>
              <Link className={`${styles.panel__link} ${themeClass}`} href={"/blog"}>Blog</Link>
              <Link className={`${styles.panel__link} ${themeClass}`} href={"/about"}>About Us</Link>
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
  )
}

export default PanelNav