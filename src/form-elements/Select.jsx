import PropTypes from "prop-types";
import BsForm from "react-bootstrap/Form";

const propTypes = {
  /** Set the Select label text */
  label: PropTypes.string,

  /** Specifies a large or small Select field */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Set a disabled Select field */
  disabled: PropTypes.bool,
};

export const Select = ({ label, size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsForm.Group className="mb-3" controlId="inputSelect">
      <BsForm.Label className="ifx__form-label--input">{label}</BsForm.Label>
      <BsForm.Select aria-label="Default select example" size={bsSize} {...props}>
        <option>Select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </BsForm.Select>
      <div className="form-text">
        Caption text, description, error notification
      </div>
    </BsForm.Group>
  );
};
Select.propTypes = propTypes;
