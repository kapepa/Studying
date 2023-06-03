import React, {FC} from "react";
import style from "./style.module.scss";
import XClose from "../XClose";

const PopupSpeaker: FC = () => {
  const onCLose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    console.log('close')
  }

  return <div className={style['popup-speaker']} onClick={onCLose}>
    <div className={style['popup-speaker__window']} onClick={(e) => e.stopPropagation()}>
      <div className={style['popup-speaker__x-close']}>
        <XClose onCd={onCLose}/>
      </div>
      <div className={style['popup-speaker__base']}>
        <div className={style['popup-speaker__frame']}>
          <video className={style['popup-speaker__video']} />
          <div className={style['popup-speaker__dashboard']}>
            <button className={style['popup-speaker__control']}>
              <img alt={'camera'}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default PopupSpeaker;