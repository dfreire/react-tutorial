import React from "react";

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          // step-4.4
          this.props.onClick();
        }}
      >
        {/* step-4.3 */}
        {this.props.symbol}
      </button>
    );
  }
}

export default Square;
