import BsListGroup from "react-bootstrap/ListGroup";

export const ListGroup = ({ children, ...props }) => {
  return (
    <BsListGroup {...props}>
      {children}
    </BsListGroup>
  );
};
