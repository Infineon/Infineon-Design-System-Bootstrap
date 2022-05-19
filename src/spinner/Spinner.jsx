import PropTypes from "prop-types";
import BsSpinner from "react-bootstrap/Spinner";

const propTypes = {
  /** Specifies a small spinner */
  size: PropTypes.oneOf(["s", "m"]),
};

export const Spinner = ({ size, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : undefined;

  return (
    <BsSpinner role="status" size={bsSize} animation="border" {...props}>
      <span className="visually-hidden">Loading...</span>
    </BsSpinner>
  );
};
Spinner.propTypes = propTypes;
