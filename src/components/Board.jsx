import React from "react";

import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      // step-6.1
      next: "X"
    };
  }

  handleClick(i) {
    const squares = [...this.state.squares];
    // step-6.2
    if (squares[i] === null) {
      squares[i] = this.state.next;
      this.setState({ squares, next: this.state.next === "X" ? "0" : "X" });
    }
  }

  renderSquare(i) {
    return (
      <Square
        symbol={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.next}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
