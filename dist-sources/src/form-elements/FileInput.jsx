import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Specifies a large or small File Input field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled File Input field */
  disabled: PropTypes.bool,
};

export const FileInput = ({ size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsForm.Group className="mb-3" controlId="fileInput">
      <BsForm.Control type="file" size={bsSize} {...props}></BsForm.Control>
    </BsForm.Group>
  );
};
FileInput.propTypes = propTypes;
