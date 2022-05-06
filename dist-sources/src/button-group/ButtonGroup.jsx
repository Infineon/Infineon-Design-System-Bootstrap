import PropTypes from "prop-types";
import BsButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "../button/Button";

const propTypes = {
  /** Set button variant */
  variant: PropTypes.oneOf(["solid", "outline"]),

  /** Set button color */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
  ]),

  /** Specifies a large or small button */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Disables the Button, preventing mouse events */
  disabled: PropTypes.bool,  
};

export const ButtonGroup = ({ size, disabled, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsButtonGroup size={bsSize}>
      <Button {...props}>Left</Button>
      <Button disabled={disabled} {...props}>Middle</Button>
      <Button {...props}>Right</Button>
    </BsButtonGroup>
  );
};
ButtonGroup.propTypes = propTypes;
