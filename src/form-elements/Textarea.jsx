import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Textarea label text */
  label: PropTypes.string,

  /** Specifies a large or small Textarea field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Textarea field */
  disabled: PropTypes.bool,

  /** Set an Input field state */
  state: PropTypes.oneOf(["default", "success", "error"]),
};

export const Textarea = ({ label, size, disabled, state, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const stateClass =
    state === "success" ? "is-valid"
    : state === "error" ? "is-invalid"
    : "";

  const disabledClass = disabled === true ? "ifx--disabled" : "";

  return (
    <BsForm.Group controlId="inputTextarea">
      <BsForm.Label className={disabledClass}>{label}</BsForm.Label>
      <BsForm.Control as="textarea" rows={5} placeholder="Placeholder" className={stateClass} size={bsSize} disabled={disabled} {...props}></BsForm.Control>
    </BsForm.Group>
  );
};
Textarea.propTypes = propTypes;
