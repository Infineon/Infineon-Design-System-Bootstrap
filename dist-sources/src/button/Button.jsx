import PropTypes from "prop-types";
import BsButton from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Set the button text */
  label: PropTypes.string,

  /** Set button variant */
  variant: PropTypes.oneOf(["solid", "outline"]),

  /** Set button color */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
  ]),

  /** Specifies a large or small button */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,

  /** Disables the Button, preventing mouse events */
  disabled: PropTypes.bool,

  /** Providing a `href` will render an `<a>` element, styled as a button. */
  href: PropTypes.string,

  /** Set icon */
  icon: PropTypes.bool,

  /** Specifies the icon position */
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export const Button = ({ label, variant, color, size, disabled, icon, iconPosition, children, ...props }) => {
  const bsVariant =
    variant === "outline" ? `outline-${color}`
    : color;

  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const iconPositionClass =
    iconPosition === "left" ? "ifx__btn-icon--before"
    : iconPosition === "right" ? "ifx__btn-icon--after"
    : undefined;

  const Icon = () => (
    icon ? <FontAwesomeIcon icon={["fal", "check"]} className={iconPositionClass}/> : null
  );

  return (
    <BsButton variant={bsVariant} size={bsSize} disabled={disabled} children={children || label} {...props}>
      {iconPosition === "left" 
        ? <><Icon/>{children}</>
        : <>{children}<Icon/></>
      }
    </BsButton>
  );
};
Button.propTypes = propTypes;
