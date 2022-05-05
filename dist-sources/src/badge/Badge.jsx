import BsBadge from "react-bootstrap/Badge";

export const Badge = ({ children, ...props }) => {
  return (
    <BsBadge pill bg="secondary" {...props}>{children}</BsBadge>
  );
};
