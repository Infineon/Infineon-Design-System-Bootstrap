import PropTypes from "prop-types";

const propTypes = {
  /** Set Image Slant */
  slant: PropTypes.oneOf(["none", "top-right_to_left", "top-left_to_right", "right", "bottom-right_to_left", "bottom-left_to_right", "left"]),
};

export const Slant = ({slant, children, ...props }) => {
  if (!slant || slant === "none") {
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <div className={"ifx__slant--"+slant}>
        {children}
      </div>
    )
  }
};