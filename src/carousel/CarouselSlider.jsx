import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";
import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";
import heroBanner from '../../public-storybook/updated_carousel_bg.png'
import heroBanner2 from '../../public-storybook/updated_carousel_bg2.png'
import heroBanner3 from '../../public-storybook/updated_carousel_bg3.png'

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

    const img = [
        {id:0, value: heroBanner},
        {id: 1, value: heroBanner2},
        {id: 2, value: heroBanner3},
    ]

    const [activeImg, setActiveImg] = useState(img)
    const [index, setIndex] = useState(0)

    console.log(img.length)

  return (
    <div>
       <div className="w-100" style={{minHeight: '650px'}}>
        <img src={activeImg[index].value} alt="img" className="w-100 h-100" />
       </div>
       <div className="mt-3 bg-secondary">
            <div className="d-flex align-items-center">
                <span className="carousel-control-prev-icon" onClick={()=>setIndex(index === 0 ? 0 : index-1)}></span>
                <img src={heroBanner} alt="" width={150} onClick={(e) => setActiveImg(e.target.src)} className='me-2'/>
                <img src={heroBanner2} alt="" width={150} onClick={(e) => setActiveImg(e.target.src)} className='me-2'/>
                <img src={heroBanner3} alt="" width={150} onClick={(e) => setActiveImg(e.target.src)}/>
                {/* for each image, i need to change either the ID or the index */}
                <span className="carousel-control-next-icon" onClick={()=>setIndex(index === img.length-1 ? img.length-1 : index+1)}></span>
            </div>
       </div>
    </div>
  );
};

CarouselSlider.propTypes = propTypes;
