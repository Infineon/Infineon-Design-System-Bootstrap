import BsBadge from "react-bootstrap/Badge";

export const Badge = ({ children, ...props }) => {
  return (
    <BsBadge {...props}>
      {children}
    </BsBadge>
  );
};
