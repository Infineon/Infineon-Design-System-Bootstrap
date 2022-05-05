import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set a disabled Range */
  disabled: PropTypes.bool,
};

export const Range = ({ disabled, ...props }) => {
  return (
    <BsForm.Range disabled={disabled} {...props}/>
  );
};
Range.propTypes = propTypes;
