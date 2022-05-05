import PropTypes from "prop-types";
import BsPagination from "react-bootstrap/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const propTypes = {
  /** Specifies a large or small Pagination */
  size: PropTypes.oneOf(["s", "m", "l"]),

  /** Specifies an active Pagination-item */
  active : PropTypes.number,
};

export const Pagination = ({ size, active, ...props }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <BsPagination size={bsSize} {...props}>
      <li className="page-item">
        <a className="page-link ifx__page-link--first" role="button" tabindex="0">
          <FontAwesomeIcon icon={["fal", "chevrons-left"]}/>
          <span class="visually-hidden">First</span>
        </a>
      </li>

      <li className="page-item">
        <a className="page-link ifx__page-link--previous" role="button" tabindex="0">
          <FontAwesomeIcon icon={["fal", "chevron-left"]}/>
          <span class="visually-hidden">Previous</span>
        </a>
      </li>

      <BsPagination.Item active={active === 1}>{1}</BsPagination.Item>
      <BsPagination.Item active={active === 2}>{2}</BsPagination.Item>
      <BsPagination.Item active={active === 3}>{3}</BsPagination.Item>
      <BsPagination.Item active={active === 4}>{4}</BsPagination.Item>
      <BsPagination.Item active={active === 5}>{5}</BsPagination.Item>

      <li className="page-item">
        <a className="page-link ifx__page-link--next" role="button" tabindex="0">
          <FontAwesomeIcon icon={["fal", "chevron-right"]}/>
          <span class="visually-hidden">Next</span>
        </a>
      </li>

      <li className="page-item">
        <a className="page-link ifx__page-link--last" role="button" tabindex="0">
          <FontAwesomeIcon icon={["fal", "chevrons-right"]}/>
          <span class="visually-hidden">Last</span>
        </a>
      </li>
    </BsPagination>
  );
};
Pagination.propTypes = propTypes;
