import PropTypes from "prop-types";
import {Slant} from "../slant/Slant";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";

const image = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const propTypes = {
  /** Set Image Slant */
  slant: PropTypes.oneOf(["none", "top-right_to_left", "top-left_to_right", "right", "bottom-right_to_left", "bottom-left_to_right", "left"]),
};

export const Image = ({slant, ...props }) => (
  <Slant slant={slant}>
    <img className="img-fluid" src={image.src} alt={image.alt}/>
  </Slant>
);

Image.propTypes = propTypes;
