import { useState } from "react";

import Cell from "./components/Cell";
import "./App.css";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");

  const message = "It is now " + go + "'s go";

  const handleClick = ({ target }) => {
    const taken =
      target.firstChild.classList.contains("circle") ||
      target.firstChild.classList.contains("cross") ||
      target.firstChild.classList.contains("square");

    const id = Number(target.id);

    if (!taken) {
      if (go === "circle") {
        target.firstChild.classList.add("circle");
        handleCellChange("circle", id);
        setGo("cross");
      }

      if (go === "cross") {
        target.firstChild.classList.add("cross");
        handleCellChange("cross", id);
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className, id) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) return className;

      return cell;
    });

    setCells(nextCells);
  };

  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <div className='gameboard' onClick={handleClick}>
        {cells.map((cell, i) => (
          <Cell key={i} cell={cell} id={i} />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
};

export default App;

