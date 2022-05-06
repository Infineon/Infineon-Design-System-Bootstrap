import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Textarea label text */
  label: PropTypes.string,

  /** Specifies a large or small Textarea field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Textarea field */
  disabled: PropTypes.bool,
};

export const Textarea = ({ label, size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsForm.Group className="mb-3" controlId="inputTextarea">
      <BsForm.Label className="ifx__form-label--input">{label}</BsForm.Label>
      <BsForm.Control as="textarea" rows={5} placeholder="Placeholder" size={bsSize} {...props}></BsForm.Control>
    </BsForm.Group>
  );
};
Textarea.propTypes = propTypes;
