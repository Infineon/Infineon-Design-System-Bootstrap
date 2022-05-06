import PropTypes from "prop-types";
import BsDropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const propTypes = {
  /** Specifies a large or small Dropdown */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Manually set the visual state of the Dropdown to `:active` */
  active: PropTypes.bool,

  /** Set the Dropdown text */
  label: PropTypes.string,

  /** Set icon */
  icon: PropTypes.oneOf([
    "none",
    "coffee",
    "star",
  ]),
};

export const Dropdown = ({ size, label, icon, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsDropdown>
      <BsDropdown.Toggle className="btn-secondary" size={bsSize} {...props}>
        <span>
          {icon ? <FontAwesomeIcon icon={icon}></FontAwesomeIcon> : ""}
          {label}
        </span>
      </BsDropdown.Toggle>

      <BsDropdown.Menu>
        {children}
      </BsDropdown.Menu>
    </BsDropdown>
  );
};
Dropdown.propTypes = propTypes;
