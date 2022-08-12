import PropTypes from "prop-types";
import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";
import { HeroBanner } from "../hero-banner/HeroBanner";

import thumbnailImg from '../../assets/thumbnail_bg.png'

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

  /** Specifies an optional aspect ratio to use for the image */
  imageAspectRatio: PropTypes.oneOf(["16:9", "none"]),
};

export const HeroBannerSlider = ({ imageAspectRatio, children, ...props }) => {
 
  return (
    <div id="heroBannerSlider" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
         <HeroBanner />
        </div>
        <div className="carousel-item">
          <HeroBanner />
        </div>
        <div className="carousel-item">
          <HeroBanner />
        </div>
      </div>

      {/* Thumbnail slider */}
      <div className="d-flex justify-content-center align-items-center controls-wrapper mt-3">
        <button className="carousel-control-prev ifx__slider-controls me-2" type="button" data-bs-target="#heroBannerSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <div className="carousel-indicators ifx__slider-indicators">
          <button type="button" data-bs-target="#heroBannerSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
            <img src={thumbnailImg} alt="indicator" className="d-block w-100 h-100 img-fluid" />
          </button>
          <button type="button" data-bs-target="#heroBannerSlider" data-bs-slide-to="1" aria-label="Slide 2">
            <img src={thumbnailImg} alt="indicator" className="d-block w-100 h-100 img-fluid" />
          </button>
          <button type="button" data-bs-target="#heroBannerSlider" data-bs-slide-to="2" aria-label="Slide 3">
            <img src={thumbnailImg} alt="indicator" className="d-block w-100 h-100 img-fluid" />
          </button>
        </div>
        <button className="carousel-control-next ifx__slider-controls ms-2" type="button" data-bs-target="#heroBannerSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
HeroBannerSlider.propTypes = propTypes;
