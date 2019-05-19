import React from "react";

import Square from "./Square";

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

// step-8.1
const INITIAL_STATE = {
  squares: Array(9).fill(null),
  next: "X",
  winner: null
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    // step-8.2
    this.state = { ...INITIAL_STATE };
  }

  handleClick(i) {
    const squares = [...this.state.squares];
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
        {/* step-8.3 */}
        {winner !== null && (
          <div>
            <button onClick={() => this.setState({ ...INITIAL_STATE })}>
              New Game
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
