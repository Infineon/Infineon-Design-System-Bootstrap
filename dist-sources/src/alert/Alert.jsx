import PropTypes from "prop-types";
import BsAlert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Set Alert color */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "color-gray-100",
  ]),

  /** Specifies a closable alert */
  closable: PropTypes.bool,

  /** Set icon */
  icon: PropTypes.bool,
};

export const Alert = ({ variant, closable, icon, children, ...props }) => {
  const IconInfo = () => (
    icon ? <FontAwesomeIcon icon={["fal", "circle-info"]} className="ifx__alert-icon"/> : null
  );

  const IconSuccess = () => (
    icon ? <FontAwesomeIcon icon={["fal", "circle-check"]} className="ifx__alert-icon"/> : null
  );

  const IconDanger = () => (
    icon ? <FontAwesomeIcon icon={["fal", "triangle-exclamation"]} className="ifx__alert-icon"/> : null
  );

  const IconWarning = () => (
    icon ? <FontAwesomeIcon icon={["fal", "circle-exclamation"]} className="ifx__alert-icon"/> : null
  );

  if ( icon ) {
    if ( variant === "primary" ) {
      return (
        <BsAlert {...props} variant="primary" dismissible={closable}>
          <div className="ifx__alert-icon-wrapper">
            <IconInfo/>
          </div>
          {children}
        </BsAlert>
      )
    } else if ( variant === "secondary" ) {
      return (
        <BsAlert {...props} variant="secondary" dismissible={closable}>
          <div className="ifx__alert-icon-wrapper">
            <IconInfo/>
          </div>
          {children}
        </BsAlert>
      )
    } else if ( variant === "success" ) {
      return (
        <BsAlert {...props} variant="success" dismissible={closable}>
          <div className="ifx__alert-icon-wrapper">
            <IconSuccess/>
          </div>
          {children}
        </BsAlert>
      )
    } else if ( variant === "danger" ) {
      return (
        <BsAlert {...props} variant="danger" dismissible={closable}>
          <div className="ifx__alert-icon-wrapper">
            <IconDanger/>
          </div>
          {children}
        </BsAlert>
      )
    } else if ( variant === "warning" ) {
      return (
        <BsAlert {...props} variant="warning" dismissible={closable}>
          <div className="ifx__alert-icon-wrapper">
            <IconWarning/>
          </div>
          {children}
        </BsAlert>
      )
    } else if ( variant === "color-gray-100" ) {
      return (
        <BsAlert {...props} variant="color-gray-100" dismissible={closable}>
          <div className="ifx__alert-icon-wrapper">
            <IconInfo/>
          </div>
          {children}
        </BsAlert>
      )
    }
  } else {
    if ( variant === "primary" ) {
      return (
        <BsAlert {...props} variant="primary" dismissible={closable}>
          {children}
        </BsAlert>
      )
    } else if ( variant === "secondary" ) {
      return (
        <BsAlert {...props} variant="secondary" dismissible={closable}>
          {children}
        </BsAlert>
      )
    } else if ( variant === "success" ) {
      return (
        <BsAlert {...props} variant="success" dismissible={closable}>
          {children}
        </BsAlert>
      )
    } else if ( variant === "danger" ) {
      return (
        <BsAlert {...props} variant="danger" dismissible={closable}>
          {children}
        </BsAlert>
      )
    } else if ( variant === "warning" ) {
      return (
        <BsAlert {...props} variant="warning" dismissible={closable}>
          {children}
        </BsAlert>
      )
    } else if ( variant === "color-gray-100" ) {
      return (
        <BsAlert {...props} variant="color-gray-100" dismissible={closable}>
          {children}
        </BsAlert>
      )
    }
  }
};
Alert.propTypes = propTypes;
