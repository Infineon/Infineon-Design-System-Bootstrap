import PropTypes from "prop-types";
import { ImageAspectRatio } from "../image-aspect-ratio/ImageAspectRatio";

const propTypes = {
  /** Specifies the image position */
  imagePosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),

  /** Specifies an optional aspect ratio to use for the image */
  imageAspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1", "none"]),

  /** Set the Headline */
  headline: PropTypes.string,

  /** Set the Paragraph text */
  text: PropTypes.string,

  /** Set the List with Icons */
  listWithIcons: PropTypes.bool,

  /** Specifies Element Items alignment */
  alignItems: PropTypes.oneOf(["center", "top"]),
};

export const ParagraphWithImages = ({ children, imageAspectRatio, imagePosition, alignItems, ...props }) => {
  const alignItemsClass =
    alignItems === "center" ? "align-items-center"
    : "";
  
  const Image = () => (
    <ImageAspectRatio aspectRatio={imageAspectRatio}/>
  );

  if (imagePosition === "left" || imagePosition === "right") {
    return (
      <div className={"ifx__paragraph-with-image ifx__paragraph-with-image--position-"+imagePosition} {...props}>
        <div className={"row " + alignItemsClass}>
          <div className="col-md-7">
            <Image/>
          </div>
          {children}
        </div>
      </div>
    )
  } else if (imagePosition === "top") {
    return (
      <div className={"ifx__paragraph-with-image ifx__paragraph-with-image--position-"+imagePosition} {...props}>
        <Image/>
        {children}
      </div>
    )
  } else if (imagePosition === "bottom") {
    return (
      <div className={"ifx__paragraph-with-image ifx__paragraph-with-image--position-"+imagePosition} {...props}>
        {children}
        <Image/>
      </div>
    )
  }
};
ParagraphWithImages.propTypes = propTypes;
