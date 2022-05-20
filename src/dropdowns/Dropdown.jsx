import PropTypes from "prop-types";
import BsDropdown from "react-bootstrap/Dropdown";

const propTypes = {
  /** Specifies a large or small Dropdown */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Manually set the visual state of the Dropdown to `:active` */
  active: PropTypes.bool,

  /** Set the Dropdown text */
  label: PropTypes.string,

  autoClose: PropTypes.oneOf([ "default", "outside" ]),
};

export const Dropdown = ({ size, label, children, autoClose = "default", ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const bsAutoClose =
    autoClose === "default" ? true
    : autoClose;

  return (
    <BsDropdown autoClose={bsAutoClose}>
      <BsDropdown.Toggle size={bsSize} data-bs-toggle="dropdown" variant="secondary" {...props}>
        {label}
      </BsDropdown.Toggle>

      <BsDropdown.Menu renderOnMount>
        {children}
      </BsDropdown.Menu>
    </BsDropdown>
  );
};
Dropdown.propTypes = propTypes;
