import PropTypes from "prop-types";

const propTypes = {
  /** Set Headline */
  headline: PropTypes.bool,

  /** Set the Headline text */
  headlineText: PropTypes.string,

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
