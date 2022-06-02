import PropTypes from "prop-types";
import {Slant} from "../slant/Slant";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";

const image = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const propTypes = {
  /** Set Image Extended size */
  size: PropTypes.oneOf(["small", "large"]),

  /** Set Image Slant */
  slant: PropTypes.oneOf(["none", "top-right_to_left", "top-left_to_right", "bottom-right_to_left", "bottom-left_to_right"]),
};

export const Image = ({slant, size, ...props }) => (
  <Slant slant={slant}>
    <div className={"ifx__image-extended ifx__image-extended--"+size}>
      <img className="img-fluid" src={image.src} alt={image.alt}/>
    </div>
  </Slant>
);

Image.propTypes = propTypes;
