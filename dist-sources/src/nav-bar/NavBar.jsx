import BsNavBar from "react-bootstrap/Navbar";

export const NavBar = ({ children }) => {
  return (
    <BsNavBar expand="lg">
      {children}
    </BsNavBar>
  );
};
