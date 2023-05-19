import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState("purple");
  const toggleTheme = () => {
    setThemeColor((color) => (color === "purple" ? "teal" : "purple"));
  };
  return (
    <ThemeContext.Provider value={themeColor}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
