import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";
  
const propTypes = {
  /** Set the Checkbox label text */
  label: PropTypes.string,

  /** Set a disabled Checkbox */
  disabled: PropTypes.bool,

  /** Set an File Input field state */
  state: PropTypes.oneOf(["default", "success", "error"]),
};

export const Checkbox = ({ label, disabled, state, ...props }) => {

  const stateClass =
    state === "success" ? "is-valid"
    : state === "error" ? "is-invalid"
    : "";

  const State = () => {
    if (state === "error") {
      return(
        <BsForm.Control.Feedback type="invalid">Error notification</BsForm.Control.Feedback>
      );
    } else {
      return null;
    }
  };

  return (
    <BsForm.Check type="checkbox" id="checkbox">
      <BsForm.Check.Input disabled={disabled} type="checkbox" className={stateClass} />
      <BsForm.Check.Label>{label}</BsForm.Check.Label>
      <State />
    </BsForm.Check>
  );
};
Checkbox.propTypes = propTypes;
