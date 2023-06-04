import React, {FC, useRef} from "react";
import style from "./style.module.scss";
import XClose from "../XClose";

const PopupSpeaker: FC = () => {
  const videoRef = useRef<HTMLVideoElement>();

  const onCLose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {

  }

  const onCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
  }

  return <div className={style['popup-speaker']} onClick={onCLose}>
    <div className={style['popup-speaker__window']} onClick={(e) => e.stopPropagation()}>
      <div className={style['popup-speaker__x-close']}>
        <XClose onCd={onCLose}/>
      </div>
      <div className={style['popup-speaker__base']}>
        <video ref={videoRef} src={'/video/video_preview_h264.mp4'} className={style['popup-speaker__video']} />
        <div className={style['popup-speaker__dashboard']}>
          <div className={style['popup-speaker__frame']}>
            <button className={style['popup-speaker__control']}>
              <img src={'/svg/video.svg'} alt={'video'}/>
            </button>
            <button className={style['popup-speaker__control']}>
              <img src={'/svg/microphone.svg'} alt={'microphone'}/>
            </button>
            <button onClick={onCall} className={style['popup-speaker__control']}>
              <img src={'/svg/phone.svg'} alt={'phone'}/>
            </button>
            <button className={style['popup-speaker__control']}>
              <img src={'/svg/monitor.svg'} alt={'monitor'}/>
            </button>
            <button className={style['popup-speaker__control']}>
              <img src={'/svg/exit.svg'} alt={'exit'}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default PopupSpeaker;