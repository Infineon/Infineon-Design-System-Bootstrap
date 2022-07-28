import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";
import { ImageAspectRatio } from "../image-aspect-ratio/ImageAspectRatio";

const propTypes = {
  /** Specifies Carousel controls */
  controls: PropTypes.bool,

  /** Specifies Carousel indicators */
  indicators: PropTypes.bool,

  /** Specifies an optional aspect ratio to use for the image */
  imageAspectRatio: PropTypes.oneOf(["16:9", "none"]),
};

export const Carousel = ({ imageAspectRatio, children, ...props }) => {
  return (
    <BsCarousel className="ifx__carousel" {...props}>
      <BsCarousel.Item>
        <ImageAspectRatio aspectRatio={imageAspectRatio}/>
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <ImageAspectRatio aspectRatio={imageAspectRatio}/>
        {children}
      </BsCarousel.Item>
      <BsCarousel.Item>
        <ImageAspectRatio aspectRatio={imageAspectRatio}/>
        {children}
      </BsCarousel.Item>
    </BsCarousel>
  );
};
Carousel.propTypes = propTypes;
