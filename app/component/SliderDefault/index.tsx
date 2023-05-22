import React, {FC} from "react";
import style from "./style.module.scss";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderDefaultInterface {
  children: React.ReactNode
  slidesToShow: number
  responsive: ResponsiveInterface[]
}

interface SampleArrowInterface {
  onClick: () => {}
}

const SliderDefault: FC<SliderDefaultInterface> = ({children, responsive, slidesToShow}) => {
  const SampleNextArrow: FC = ({onClick}: SampleArrowInterface) => {
    return <div className={style['slider__slick-next']} onClick={onClick}/>;
  }

  const SamplePrevArrow: FC = ({onClick}: SampleArrowInterface) => {
    return <div className={style['slider__slick-prev']} onClick={onClick}/>;
  }

  return <Slider
    speed={500}
    infinite={true}
    slidesToShow={slidesToShow}
    responsive={responsive}
    className={style.slider}
    nextArrow={<SampleNextArrow />}
    prevArrow={<SamplePrevArrow />}
  >{children}</Slider>
}

export default SliderDefault;

