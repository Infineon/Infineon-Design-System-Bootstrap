import PropTypes from "prop-types";
import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";

import heroBanner from '../../public-storybook/carousel_slider_1.png'
import heroBanner2 from '../../public-storybook/carousel_slider_2.png'
import heroBanner3 from '../../public-storybook/carousel_slider_3.png'
import heroBanner4 from '../../public-storybook/carousel_slider_4.png'
import heroBanner5 from '../../public-storybook/carousel_slider_5.png'
import heroBanner6 from '../../public-storybook/carousel_slider_6.png'
import heroBanner7 from '../../public-storybook/carousel_slider_7.png'


import { useState } from "react";

const image16_9 = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const image_none = {
  src: imageSrc4_3,
  alt: "4-3-s",
};


const propTypes = {
  /** Specifies Carousel controls */
  controls: PropTypes.bool,

  /** Specifies Carousel indicators */
  indicators: PropTypes.bool,

  /** Specifies an aspect ratio to use for the image */
  aspectRatio: PropTypes.oneOf(["16:9", "none"]),  
};

const Image = ({ aspectRatio }) => {
  const aspectRatioClass = 
    aspectRatio === "16:9" 
    ? "ifx__aspect-ratio--16-9"
    : "";

  const imageSrc =
    aspectRatio === "16:9" 
    ? image16_9.src
    : image_none.src;

  const imageAlt =
    aspectRatio === "16:9" 
    ? image16_9.alt
    : image_none.alt;

  if ( aspectRatioClass === "" ) {
    return (
      <img className="ifx__carousel__image" src={imageSrc} alt={imageAlt}/>
    )
  }
  
  return (
    <div className="ifx__aspect-ratio__box-wrapper ">
      <div className={"ifx__aspect-ratio__box " + aspectRatioClass}>
        <img className="ifx__aspect-ratio__box__in" src={imageSrc} alt={imageAlt}/>
      </div>
    </div>
  )
};

export const CarouselSlider = ({ aspectRatio, children, ...props }) => {

    const imgs = [
      {id: 0, value: heroBanner},
      {id: 1, value: heroBanner2},
      {id: 3, value: heroBanner3},
      {id: 4, value: heroBanner4},
      {id: 5, value: heroBanner5},
      {id: 6, value: heroBanner6},
      {id: 7, value: heroBanner7},

      {id: 8, value: heroBanner4},
      {id: 9, value: heroBanner5},
      {id: 10, value: heroBanner6},
      {id: 11, value: heroBanner7},
    ]

    const [index, setIndex] = useState(0)
    const [activeImg, setActiveImg] = useState(0)
    

    const handleActiveImg = (i) => {
      setIndex(i)
      setActiveImg(i)
    }


  return (
    <div>
       <div className="w-100" >
        <img src={imgs[index].value} alt="img" className="w-100 h-100" />
       </div>
       <div className="mt-2 w-100 d-flex justify-content-center">
            <div className="d-flex align-items-center">
              {/* desktop */}
                <div className="d-lg-flex align-items-center justify-content-center d-none w-100">
                  <div>
                    <span className="carousel-slider-prev" onClick={()=> handleActiveImg(index === 0 ? 0 : index-1)}>
                      <span className="carousel-control-prev-icon"></span>
                    </span>
                  </div>
                  <div className="d-flex gap-2 flex-wrap mx-2">
                    {imgs.map((item, i) => 
                    <div key={i}>
                      <img className={`thumbnail__img ${i === activeImg ? 'act' : ""}`} src={item.value}  width={100} onClick={(e) => handleActiveImg(i)} />
                    </div>
                    )}
                  </div>
                  <div>
                    <span className="carousel-slider-next justify-self-end" onClick={()=> handleActiveImg(index === imgs.length-1 ? imgs.length-1 : index+1)}>
                      <span className="carousel-control-next-icon"></span>
                    </span>
                  </div>
                </div>
                {/* mobile */}
                <div className="row g-0 align-items-center justify-content-center d-lg-none w-100">
                  <div className="col-11 d-flex g-0 justify-content-center flex-wrap">
                  {imgs.map((item, i) => 
                    <div key={i} className="d-flex mb-3">
                      <span className={`mobile-slide-indicator mx-1 ${i === activeImg ? 'active' : ""}`}  key={i} onClick={(e) => handleActiveImg(i)} />
                    </div>
                  )}
                  </div>
                </div>
            </div>
       </div>
    </div>
  );
};

CarouselSlider.propTypes = propTypes;
