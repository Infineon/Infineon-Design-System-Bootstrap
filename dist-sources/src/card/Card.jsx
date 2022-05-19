import PropTypes from "prop-types";
import BsCard from "react-bootstrap/Card";
import { ImageAspectRatio } from "../image-aspect-ratio/ImageAspectRatio";

const propTypes = {
  /** Set Badge */
  badge: PropTypes.bool,

  /** Set the Card subtitle text */
  skyline: PropTypes.bool,

  /** Set the Card title */
  title: PropTypes.string,

  /** Set the Card text */
  text: PropTypes.string,

  /** Set Card example button */
  button: PropTypes.bool,

  /** Set Card example links */
  link: PropTypes.bool,

  /** Set Card image */
  image: PropTypes.bool,

  /** Specifies an optional aspect ratio to use for the image */
  imageAspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1", "none"]),
};

export const Card = ({ image, imageAspectRatio, children, ...props }) => {
  if ( image ) {
      return (
        <BsCard {...props}>
          <ImageAspectRatio aspectRatio={imageAspectRatio}/>
          {children}
        </BsCard>
      )
  } else {
    return (
      <BsCard {...props}>
        {children}
      </BsCard>
    )
  }
};
Card.propTypes = propTypes;
