import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { color, toggleColor } = useContext(ThemeContext);
  return (
    <nav className="Navbar" style={{ backgroundColor: color }}>
      <div className="Navbar-title">
        <span>WEBSITE</span>
      </div>
      <button className="Navbar-button" onClick={toggleColor}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
