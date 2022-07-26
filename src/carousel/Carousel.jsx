import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";
import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";
import imageSrc1_1 from "../../public-storybook/1080x1080_ratio-1-1.png";

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

export const Carousel = ({ aspectRatio, children, ...props }) => {
  return (
    <BsCarousel className="ifx__carousel" {...props}>
      <BsCarousel.Item>
        <Image aspectRatio={aspectRatio}/>
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <Image aspectRatio={aspectRatio}/>
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <Image aspectRatio={aspectRatio}/>
        {children}
      </BsCarousel.Item>
    </BsCarousel>
  );
};
Carousel.propTypes = propTypes;
