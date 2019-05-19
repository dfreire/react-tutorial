import React from "react";

// step-1.6
import Board from "./Board";

class Game extends React.Component {
  render() {
    // step-1.5
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
