import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set the Radio Button label text */
  label: PropTypes.string,

  /** Set a disabled Select Radio Button */
  disabled: PropTypes.bool,
};

export const RadioButton = ({ label, children, ...props }) => {
  return (
    <BsForm.Check type="radio" id="radioButton" label={label} {...props}></BsForm.Check>
  );
};
RadioButton.propTypes = propTypes;
