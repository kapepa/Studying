import { FC } from "react";
import styles from "./styles.module.scss";

const PanelNav: FC = () => {
  return (
    <div className={styles.panel}>
      <div className="container">
        <div className={styles.panel__toolbar}>PanelNav</div>
      </div>
    </div>
  )
}

export default PanelNav