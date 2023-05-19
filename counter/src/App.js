import React, { useState } from "react";
import CounterReadOnly from "./CounterReadOnly";
import ThemeContext from "./ThemeContext";

function App() {
  const [themeColor, setThemeColor] = useState("purple");
  const toggleTheme = () => {
    setThemeColor((color) => (color === "purple" ? "teal" : "purple"));
  };
  return (
    <div>
      <ThemeContext.Provider value={themeColor}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <CounterReadOnly />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
