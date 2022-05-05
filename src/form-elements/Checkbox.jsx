import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set the Checkbox label text */
  label: PropTypes.string,

  /** Set a disabled Checkbox */
  disabled: PropTypes.bool,
};

export const Checkbox = ({ label, children, ...props }) => {
  return (
    <BsForm.Check type="checkbox" id="checkbox" label={label}  {...props}></BsForm.Check>
  );
};
Checkbox.propTypes = propTypes;
