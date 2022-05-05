import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set the Switch label text */
  label: PropTypes.string,

  /** Set a disabled Switch */
  disabled: PropTypes.bool,
};

export const Switch = ({ label, children, ...props }) => {
  return (
    <BsForm.Check type="switch" id="switch" label={label} {...props}></BsForm.Check>
  );
};
Switch.propTypes = propTypes;
