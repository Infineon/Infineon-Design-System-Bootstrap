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
    <BsForm>
      <BsForm.Check type="radio" id="radioButton-1" label={label} name="group-1" {...props}></BsForm.Check>
      <BsForm.Check type="radio" id="radioButton-2" label={label} name="group-1" {...props}></BsForm.Check>
      <BsForm.Check type="radio" id="radioButton-3" label={label} name="group-1" {...props}></BsForm.Check>
    </BsForm>
  );
};
RadioButton.propTypes = propTypes;
