import React from "react";

class Square extends React.Component {
  constructor(props) {
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
          this.setState({ symbol: "X" });
        }}
      >
        {this.state.symbol}
      </button>
    );
  }
}

export default Square;
