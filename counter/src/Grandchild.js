import React from "react";
import GreatGrandReadOnly from "./GreatGrandReadOnly";
import GreatGrandReadWrite from "./GreatGrandReadWrite";

function Grandchild() {
  return (
    <div style={{ border: "2px solid #39CCCC", margin: "1rem" }}>
      <p>I'm the grandchild!</p>
      <GreatGrandReadOnly />
      <GreatGrandReadWrite />
    </div>
  );
}

export default Grandchild;
