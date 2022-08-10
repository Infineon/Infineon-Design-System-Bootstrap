import PropTypes from "prop-types";

import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";
import { ImageAspectRatio } from '../image-aspect-ratio/ImageAspectRatio'
import '../../dist/index'

const image16_9 = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const image_none = {
  src: imageSrc4_3,
  alt: "4-3-s",
};


import { ImageAspectRatio } from "../image-aspect-ratio/ImageAspectRatio";


const propTypes = {
  /** Specifies an optional aspect ratio to use for the image */
  imageAspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1", "none"]),
};

export const Carousel = ({ imageAspectRatio, children, ...props }) => {
 
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
            <div className="carousel-caption d-none">
              <p>First slide caption. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="carousel-item">
            <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
            <div className="carousel-caption d-none">
              <p>Second slide caption. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus culpa assumenda expedita iusto perspiciatis.</p>
            </div>
          </div>
          <div className="carousel-item">
            <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
            <div className="carousel-caption d-none">
              <p>Third slide caption. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="ifx__carousel-caption"></div>
    </>
  );
};
Carousel.propTypes = propTypes;
