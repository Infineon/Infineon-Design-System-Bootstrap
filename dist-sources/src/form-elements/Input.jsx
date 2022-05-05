import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Input label text */
  label: PropTypes.string,

  /** Specifies a large or small Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Input field */
  disabled: PropTypes.bool,

  /** Set an Input field state */
  state: PropTypes.oneOf(["none", "success", "error"]),
};

export const Input = ({ label, size, state, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const stateClass =
    state === "success" ? "ifx__input--success"
    : state === "error" ? "ifx__input--error"
    : "";

  return (
    <BsForm.Group className={stateClass} controlId="input">
      <BsForm.Label className="ifx__form-label--input">{label}</BsForm.Label>
      <BsForm.Control placeholder="Placeholder" size={bsSize} {...props}></BsForm.Control>
      <div className="form-text">
        Caption text, description, error notification
      </div>
    </BsForm.Group>
  );
};
Input.propTypes = propTypes;
