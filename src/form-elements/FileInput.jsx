import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small File Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled File Input field */
  disabled: PropTypes.bool,

  /** Set an File Input field state */
  state: PropTypes.oneOf(["default", "success", "error"]),
};

export const FileInput = ({ size, state, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  const stateClass =
    state === "success" ? "is-valid"
    : state === "error" ? "is-invalid"
    : "";

  return (
    <BsForm.Group className="mb-3" controlId="fileInput">
      <BsForm.Control type="file" size={bsSize} className={stateClass} {...props}></BsForm.Control>
    </BsForm.Group>
  );
};
FileInput.propTypes = propTypes;
