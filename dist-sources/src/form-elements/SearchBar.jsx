import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
import BsInputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const propTypes = {
  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,
};

export const SearchBar = ({ size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsInputGroup>
      <BsForm.Control id="ifx__inputSearch" type="text" placeholder="Search" size={bsSize} {...props}></BsForm.Control>
      <span class="ifx__search-icon-wrapper">
        <FontAwesomeIcon icon={["fal", "magnifying-glass"]}/>
      </span>
    </BsInputGroup>    
  );
};
SearchBar.propTypes = propTypes;
