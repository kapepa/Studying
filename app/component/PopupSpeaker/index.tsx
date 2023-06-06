import React, {FC, useRef} from "react";
import style from "./style.module.scss";
import XClose from "../XClose";
import {useRouter} from "next/router";

const PopupSpeaker: FC = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>();

  const onCLose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    router.push({query: {}});
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
        <video ref={videoRef} className={style['popup-speaker__video']} >
          <source src={'/video/video_preview_h264.mp4'} width={960} height={540} type="video/mp4" media="(max-width:1025px)" />
          <source src={'/video/video_preview_h264.mp4'} type="video/mp4" media="(max-width:480px)" />
        </video>
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