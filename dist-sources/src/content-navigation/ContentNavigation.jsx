import BsNav from "react-bootstrap/Nav";

export const ContentNavigation = ({ children, ...props }) => {
  return (
    <BsNav {...props} activeKey="/home" as="ul">
      {children}
    </BsNav>
  );
};
