import React from "react";

// step-5.1
const Square = props => (
  <button className="square" onClick={props.onClick}>
    {props.symbol}
  </button>
);

export default Square;
