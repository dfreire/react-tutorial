import React from "react";

class Square extends React.Component {
  constructor(props) {
    // step-3.2
    super(props);
    this.state = {
      symbol: null // "X" or "O"
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          // step-3.1
          console.log("clicked", this.props.symbol);
          // step-3.3
          this.setState({ symbol: "X" });
        }}
      >
        {/* step-3.4 */}
        {this.state.symbol}
      </button>
    );
  }
}

export default Square;
