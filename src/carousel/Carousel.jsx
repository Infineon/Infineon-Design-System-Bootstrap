import PropTypes from "prop-types";
import BsCarousel from "react-bootstrap/Carousel";
import imageSrc4_3 from "../../public-storybook/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";
import { ImageAspectRatio } from '../image-aspect-ratio/ImageAspectRatio'


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

export const Carousel = ({ imageAspectRatio, children, ...props }) => {
  return (
    // <BsCarousel className="ifx__carousel" {...props}>
    //   <BsCarousel.Item>
    //     <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
    //     {children}
    //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, tempora.</p>
    //   </BsCarousel.Item>
    //   <BsCarousel.Item>
    //     <ImageAspectRatio aspectRatio={imageAspectRatio}/>
    //     {children}
    //   </BsCarousel.Item>
    //   <BsCarousel.Item>
    //     <ImageAspectRatio aspectRatio={imageAspectRatio}/>
    //     {children}
    //   </BsCarousel.Item>
    // </BsCarousel>

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
   
      <div className="carousel-inner">
        <div className="carousel-item active">
          <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
          <div className="ifx__caption">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
          <div className="ifx__caption">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <ImageAspectRatio aspectRatio={imageAspectRatio}/> 
          <div className="ifx__caption">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      
    </div>
  );
};
Carousel.propTypes = propTypes;
