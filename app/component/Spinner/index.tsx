import {FC} from "react";
import style from "./style.module.scss";

const Spinner: FC = () => {
  return <div className={style.spinner}>
    <div className={style.spinner__rotate}>Loading...</div>
  </div>
}

export default Spinner;