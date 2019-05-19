import React from "react";

class Square extends React.Component {
  render() {
    // step-2.2
    return <button className="square">{this.props.value}</button>;
  }
}

export default Square;
