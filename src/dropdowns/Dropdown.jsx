import PropTypes from "prop-types";
import BsDropdown from "react-bootstrap/Dropdown";

const propTypes = {
  /** Specifies a large or small Dropdown */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Manually set the visual state of the Dropdown to `:active` */
  active: PropTypes.bool,

  /** Set the Dropdown text */
  label: PropTypes.string,
};

export const Dropdown = ({ size, label, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsDropdown>
      <BsDropdown.Toggle size={bsSize} variant="secondary" {...props}>
        {label}
      </BsDropdown.Toggle>

      <BsDropdown.Menu>
        {children}
      </BsDropdown.Menu>
    </BsDropdown>
  );
};
Dropdown.propTypes = propTypes;
