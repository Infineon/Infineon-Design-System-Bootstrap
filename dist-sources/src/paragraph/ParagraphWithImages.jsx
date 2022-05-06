import PropTypes from "prop-types";
import imageSrc4_3 from "../../public/1440x1080_ratio-4-3.png";
import imageSrc16_9 from "../../public/1920x1080_ratio-16-9.png";
import imageSrc1_1 from "../../public/1080x1080_ratio-1-1.png";

const image4_3 = {
  src: imageSrc4_3,
  alt: "4-3-s",
};

const image16_9 = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const image1_1 = {
  src: imageSrc1_1,
  alt: "1-1-s",
};

const propTypes = {
  /** Specifies an aspect ratio to use for the image */
  aspectRatio: PropTypes.oneOf(["4:3", "16:9", "1:1"]),

  /** Specifies the image position */
  imagePosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),

  /** Specifies text alignment */
  alignItems: PropTypes.oneOf(["center", "top"]),

  /** Set the Paragraph title */
  title: PropTypes.string,

  /** Set the Paragraph text */
  text: PropTypes.string,
};

export const ParagraphWithImages = ({ children, aspectRatio, imagePosition, alignItems, ...props }) => {
  const aspectRatioClass = 
    aspectRatio === "4:3" ? "ifx__aspect-ratio--4-3"
    : aspectRatio === "16:9" ? "ifx__aspect-ratio--16-9"
    : aspectRatio === "1:1" ? "ifx__aspect-ratio--1-1"
    : "";

  const imageSrc =
    aspectRatio === "4:3" ? image4_3.src
    : aspectRatio === "16:9" ? image16_9.src
    : aspectRatio === "1:1" ? image1_1.src
    : "";

  const imageAlt =
    aspectRatio === "4:3" ? image4_3.alt
    : aspectRatio === "16:9" ? image16_9.alt
    : aspectRatio === "1:1" ? image1_1.alt
    : "";

  const alignItemsClass =
    alignItems === "center" ? "align-items-center"
    : "";

  const Image = () => (
    <div className="ifx__aspect-ratio__box-wrapper">
      <div className={"ifx__aspect-ratio__box " + aspectRatioClass}>
        <img className="ifx__aspect-ratio__box__in" src={imageSrc} alt={imageAlt}/>
      </div>
    </div>
  );

  if (imagePosition === "left") {
    return (
      <div className="ifx__paragraph-with-images" {...props}>
        {imagePosition === "left"
          ? <>
            <div className={"row " + alignItemsClass}>
              <div className="col-md-7">
                <Image/>
              </div>
              {children}
            </div>
          </>
          : <>{children} <Image/></>
        }
      </div>
    )
  } else if (imagePosition === "right") {
    return (
      <div className="ifx__paragraph-with-images" {...props}>
        {imagePosition === "right"
          ? <>
            <div className={"row " + alignItemsClass}>
              {children}
              <div className="col-md-7">
                <Image/>
              </div>
            </div>
          </>
          : <>{children} <Image/></>
        }
      </div>
    )
  } else if (imagePosition === "top") {
    return (
      <div className="ifx__paragraph-with-images ifx__image-top" {...props}>
        <div className={"row " + alignItemsClass}>
          <div className="col-md-6">
            <Image/>
          </div>
          {children}
        </div>
      </div>
    )
  } else if (imagePosition === "bottom") {
    return (
      <div className={"ifx__paragraph-with-images ifx__image-bottom " + alignItemsClass} {...props}>
        <div className="ifx__paragraph-without-icon">
          <div className="row justify-content-center">
            <div className="col-md-10">
              {children}
              <div className="d-md-flex">
                <div className="col-md-6">
                  <Image/>
                </div>
                <div className="d-flex flex-column justify-content-end">
                  <p className="ifx__image-description">Information Description</p>
                  <p className="ifx__image-description-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
ParagraphWithImages.propTypes = propTypes;
