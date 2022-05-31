import BsButton from "react-bootstrap/Button";

export const ButtonBackToTop = ({ children, ...props }) => {
  return (
    <BsButton {...props}>
      {children}
    </BsButton>
  );
};
