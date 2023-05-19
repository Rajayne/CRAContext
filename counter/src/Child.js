import React from "react";
import Grandchild from "./Grandchild";

function Child() {
  return (
    <div style={{ border: "2px solid #0074D9", margin: "1rem" }}>
      <p>I'm the child!</p>
      <Grandchild />
    </div>
  );
}

export default Child;
