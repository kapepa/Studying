import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

const PanelNav: FC = () => {
  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel__toolbar}>
          <Link href="/home">
            <div className={styles.panel__login}></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PanelNav