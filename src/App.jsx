import { useState, useEffect } from "react";

import Cell from "./components/Cell";
import "./App.css";

import { handleClick } from "./utils/utils";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");

  const message = "It is now " + go + "'s go";

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((arr) => {
      let circleWins = arr.every((cell) => cells[cell] === "circle");
      if (circleWins) return setWinningMessage("Circle Wins!");

      let crossWins = arr.every((cell) => cells[cell] === "cross");
      if (crossWins) return setWinningMessage("Cross Wins");
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <div
        className='gameboard'
        onClick={(e) =>
          handleClick(e, winningMessage, go, setGo, cells, setCells)
        }>
        {cells.map((cell, i) => (
          <Cell key={i} cell={cell} id={i} />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
};

export default App;

