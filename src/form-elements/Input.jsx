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
  state: PropTypes.oneOf(["default", "success", "error"]),
};

export const Input = ({ label, size, disabled, state, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const stateClass =
    state === "success" ? "is-valid"
    : state === "error" ? "is-invalid"
    : "";

  const disabledClass = disabled === true ? "ifx--disabled" : "";

  const State = () => {
    if (state === "success") {
      return(
        <div className={"valid-feedback"}>
          Caption text, description, error notification
        </div>
      )
    } else if (state === "error") {
      return(
        <div className={"invalid-feedback"}>
          Caption text, description, error notification
        </div>
      )
    } else {
      return(
        <div className={"form-text " + disabledClass}>
          Caption text, description, error notification
        </div>
      )
    }
  };
  

  return (
    <BsForm.Group controlId="input">
      <BsForm.Label className={disabledClass}>{label}</BsForm.Label>
      <BsForm.Control className={stateClass} placeholder="Placeholder" size={bsSize} disabled={disabled} {...props}></BsForm.Control>
      <State disabled={disabledClass} />
    </BsForm.Group>
  );
};
Input.propTypes = propTypes;
