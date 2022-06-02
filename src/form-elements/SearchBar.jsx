import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,

  /** Set an Input field state */
  state: PropTypes.oneOf(["default", "success", "error"]),
};

export const SearchBar = ({ size, state, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const stateClass =
    state === "success" ? "is-valid"
    : state === "error" ? "is-invalid"
    : "";

  return (
    <BsForm.Control className={"ifx__searchbar " + stateClass} type="text" placeholder="Search" size={bsSize} {...props}></BsForm.Control>
  );
};
SearchBar.propTypes = propTypes;
