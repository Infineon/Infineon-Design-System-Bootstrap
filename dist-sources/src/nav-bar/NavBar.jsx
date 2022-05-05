import BsNavBar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { initNavBar } from "./nav-bar";

export const NavBar = ({ children }) => {
  useEffect(( ) => {
    initNavBar()
  },[])

  return (
    <BsNavBar expand="lg">
      {children}
    </BsNavBar>
  );
};
