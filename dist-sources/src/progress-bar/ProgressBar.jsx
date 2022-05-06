import PropTypes from "prop-types";
import BsProgressBar from "react-bootstrap/ProgressBar";

const propTypes = {
  /** Set the Progress-bar text */
  label: PropTypes.bool,

  /** Specifies a small Progress-bar */
  small: PropTypes.bool,

  /** Set the current value of progress */
  now: PropTypes.number,
};

export const ProgressBar = ({ label, small, now }) => {
  const labelText = 
    label && !small ? `${now}%` 
    : "";

  const smallClass = 
    small ? "ifx__progress-small" 
    : "";

  return (
    <BsProgressBar label={labelText} className={smallClass} now={now}></BsProgressBar>
  );
};
ProgressBar.propTypes = propTypes;
