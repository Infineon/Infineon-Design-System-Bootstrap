import PropTypes from "prop-types";

const propTypes = {
  /** Set the Paragraph title */
  title: PropTypes.string,

  /** Set the Paragraph text */
  text: PropTypes.string,
};

export const Paragraph = ({ children, ...props }) => {
  return (
    <div className="ifx__paragraph" {...props}>
      {children}
    </div>
  )
};
Paragraph.propTypes = propTypes;
