import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Navbar = () => {
  const backgroundColor = useContext(ThemeContext);
  return (
    <nav style={{ backgroundColor }}>
      <span>WEBSITE</span>
    </nav>
  );
};

export default Navbar;
