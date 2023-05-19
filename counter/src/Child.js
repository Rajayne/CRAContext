import React, { useContext } from "react";
import Grandchild from "./Grandchild";
import ThemeContext from "./ThemeContext";

function Child() {
  const color = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid #0074D9", margin: "1rem" }}>
      <p style={{ color: color }}>I'm the child!</p>
      <Grandchild />
    </div>
  );
}

export default Child;
