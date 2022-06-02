import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Select label text */
  label: PropTypes.string,

  /** Specifies a large or small Select field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Select field */
  disabled: PropTypes.bool,

  /** Set an Select field state */
  state: PropTypes.oneOf(["default", "success", "error"]),
};

export const Select = ({ label, size, disabled, state, ...props }) => {
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
    <BsForm.Group className="mb-3" controlId="inputSelect">
      <BsForm.Label className={disabledClass}>{label}</BsForm.Label>
      <BsForm.Select aria-label="Default select example" size={bsSize} disabled={disabled} className={stateClass} {...props}>
        <option value="" selected disabled>Select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </BsForm.Select>
      <State disabled={disabledClass} />
    </BsForm.Group>
  );
};
Select.propTypes = propTypes;
