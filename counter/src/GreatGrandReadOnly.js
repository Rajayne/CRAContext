import React, { useContext } from "react";
import CountContext from "./countContext";

function GreatGrandReadOnly() {
  const num = useContext(CountContext);

  return (
    <div style={{ border: "2px solid #7FDBFF", margin: "1rem" }}>
      <p>I'm a great-grandchild!</p>
      <p>Here's the count: {num}.</p>
    </div>
  );
}

export default GreatGrandReadOnly;
