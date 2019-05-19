import React from "react";

import Square from "./Square";

// step-7.1
const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      next: "X",
      // step-7.2
      winner: null
    };
  }

  handleClick(i) {
    const squares = [...this.state.squares];
    // step-7.3
    if (squares[i] === null && this.state.winner === null) {
      squares[i] = this.state.next;
      const winner = calculateWinner(squares);
      if (winner !== null) {
        this.setState({ squares, winner });
      } else {
        this.setState({ squares, next: this.state.next === "X" ? "0" : "X" });
      }
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
    // step-7.4
    const { winner } = this.state;
    let status;
    if (winner !== null) {
      status = "Winner: " + winner;
    } else {
      status = `Next player: ${this.state.next}`;
    }

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
