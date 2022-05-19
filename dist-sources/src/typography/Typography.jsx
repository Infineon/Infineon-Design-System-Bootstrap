import PropTypes from "prop-types";

const propTypes = {
  /** Set the Paragraph title */
  text: PropTypes.string,
};

export const Typography = ({ children, ...props }) => {
  return (
    <div className="ifx__paragraph" {...props}>
      {children}
    </div>
  )
};

Typography.propTypes = propTypes;
