import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";
<<<<<<< HEAD
import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";

const image16_9 = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const image_none = {
  src: imageSrc4_3,
  alt: "4-3-s",
};

=======
import { ImageAspectRatio } from "../image-aspect-ratio/ImageAspectRatio";
>>>>>>> 960d65ebb670cafbe1868dd4c2133a3b0bd1917e

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
