import React, {FC, useEffect, useRef} from "react";
import style from "./style.module.scss";
import XClose from "../XClose";
import {useRouter} from "next/router";
import classNames from "classnames";

interface PopupSpeakerInterface {
  loader: boolean,
  controlLoader: () => void;
}

const PopupSpeaker: FC<PopupSpeakerInterface> = ({loader, controlLoader}) => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>();
  const hidePopup = classNames({[style['popup-speaker--hide']]: loader})

  const onCLose =  async (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    const target = (e.target as HTMLDivElement | HTMLButtonElement );
     if( target.classList.contains(style['popup-speaker']) || target['name'] === "close") await router.push({query: {}});
  }

  const onCall = (e: React.MouseEvent<HTMLButtonElement>) => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
  }

  const loadImages = () => controlLoader();

  useEffect(() => {
    controlLoader();
  }, [])

  return <div className={`${style['popup-speaker']} ${hidePopup}`} onClick={onCLose}>
    <div className={style['popup-speaker__window']}>
      <div className={style['popup-speaker__x-close']}>
        <XClose onCd={onCLose}/>
      </div>
      <div className={style['popup-speaker__base']}>
        <video onLoadedData={loadImages} ref={videoRef} className={style['popup-speaker__video']} >
          <source  src={'/video/video_preview_h264.mp4'} width={960} height={540} type="video/mp4" media="(max-width:1025px)" />
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