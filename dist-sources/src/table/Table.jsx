import PropTypes from "prop-types";
import BsTable from "react-bootstrap/Table";

const propTypes = {
  /** Specifies a small Table */
  size: PropTypes.oneOf(["s", "m"]),

  /** Specifies a hoverable Table body */
  hover: PropTypes.bool,

  /** Specifies a caption text */
  caption: PropTypes.string,

  /** Specifies text alignment */
  textAlign: PropTypes.oneOf(["left", "right"]),
};

export const Table = ({ size, caption, textAlign, children, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : undefined;

  const textAlignClass =
  textAlign === "left" ? ""
  : "text-end";

  return (
    <div class="table-responsive">
      <BsTable size={bsSize} {...props}>
        {children}
        
        <tbody className={textAlignClass}>
          <tr>
            <td>1</td>
            <td>15</td>
            <td>15</td>
            <td>Example</td>
          </tr>
          <tr>
            <td>2</td>
            <td>21</td>
            <td>21</td>
            <td>Example</td>
          </tr>
          <tr>
            <td>3</td>
            <td>12</td>
            <td>12</td>
            <td>Example</td>
          </tr>
          <tr>
            <td>4</td>
            <td>25</td>
            <td>25</td>
            <td>Example</td>
          </tr>
        </tbody>

        {caption ? <caption>{caption}</caption> : ""}
      </BsTable>
    </div>
  );
};
Table.propTypes = propTypes;
