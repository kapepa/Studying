import {FC} from "react";
import style from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ResponsiveInterface} from "../../interface/ResponsiveInterface";

const Students: FC = () => {
  const responsive: ResponsiveInterface[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]

  const SampleNextArrow: FC = ({onClick}: { onClick: () => {} }) => {
    return <div className={style.students__next} onClick={onClick}/>;
  }

  const SamplePrevArrow: FC = ({onClick}: { onClick: () => {} }) => {
    return <div className={style.students__prev} onClick={onClick}/>;
  }


  return <section className={style.students}>
    <h4 className='h-bold'>What our students have to say</h4>
    <div className={style.students__carousel}>
      <Slider
        speed={500}
        infinite={true}
        slidesToShow={4}
        responsive={responsive}
        className={style.students__slider}
        nextArrow={<SampleNextArrow/>}
        prevArrow={<SamplePrevArrow/>}
      >

        <div className={style.students__wrapper}>
          <div className={style.students__card}>
            <div className={style.students__frame}>
              <img className={style.students__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            </div>
            <h5 className={style.students__name}>Bulkin Simons</h5>
            <span className={style.students__message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
          </div>
        </div>

        <div className={style.students__wrapper}>
          <div className={style.students__card}>
            <div className={style.students__frame}>
              <img className={style.students__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            </div>
            <h5 className={style.students__name}>Bulkin Simons</h5>
            <span className={style.students__message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
          </div>
        </div>

        <div className={style.students__wrapper}>
          <div className={style.students__card}>
            <div className={style.students__frame}>
              <img className={style.students__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            </div>
            <h5 className={style.students__name}>Bulkin Simons</h5>
            <span className={style.students__message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
          </div>
        </div>

        <div className={style.students__wrapper}>
          <div className={style.students__card}>
            <div className={style.students__frame}>
              <img className={style.students__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            </div>
            <h5 className={style.students__name}>Bulkin Simons</h5>
            <span className={style.students__message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
          </div>
        </div>

        <div className={style.students__wrapper}>
          <div className={style.students__card}>
            <div className={style.students__frame}>
              <img className={style.students__avatar} src={'/image/avatar.png'} alt={'avatar'}/>
            </div>
            <h5 className={style.students__name}>Bulkin Simons</h5>
            <span className={style.students__message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
          </div>
        </div>

      </Slider>
    </div>
  </section>
}

export default Students;