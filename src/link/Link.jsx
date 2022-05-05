import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Set the Link text */
  linkText: PropTypes.string,

  /** Set Link color */
  color: PropTypes.oneOf(["brand", "font"]),

  /** Set underline */
  underlineNone: PropTypes.bool,

  /** Set icon */
  icon: PropTypes.bool,

  /** Specifies the icon position */
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export const Link = ({ linkText, color, underlineNone, icon, iconPosition, ...props }) => {
  const colorClass =
    color === "brand" ? "ifx__link-color-brand"
    : "";

  const underlineClass =
    underlineNone === true ? "ifx__link-underline-none"
    : "";

  const iconPositionClass =
    iconPosition === "left" ? "ifx__link-icon--before"
    : iconPosition === "right" ? "ifx__link-icon--after"
    : "";

  const IconLeft = () => (
    icon ? <FontAwesomeIcon icon={["fa", "arrow-down"]} className={iconPositionClass}/> : null
  );

  const IconRight = () => (
    icon ? <FontAwesomeIcon icon={["fa", "arrow-right"]} className={iconPositionClass}/> : null
  );

  return (
    <>
      {iconPosition === "left" 
        ? <><a className={colorClass + " " + underlineClass} href="#" {...props}><IconLeft/>{linkText}</a></>
        : <><a className={colorClass + " " + underlineClass} href="#" {...props}>{linkText}<IconRight/></a></>
      }
    </>
  );
};
Link.propTypes = propTypes;
