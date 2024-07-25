export const handleClick = (e, winningMessage, go, setGo, cells, setCells) => {
  if (!winningMessage) {
    const target = e.target;

    const taken =
      target.firstChild?.classList.contains("circle") ||
      target.firstChild?.classList.contains("cross") ||
      target.firstChild?.classList.contains("square") ||
      target.classList.contains("circle") ||
      target.classList.contains("cross");

    if (!taken) {
      const id = Number(target.id);

      if (go === "circle") {
        target.firstChild.classList.add("circle");
        handleCellChange("circle", id, cells, setCells);
        setGo("cross");
      }

      if (go === "cross") {
        target.firstChild.classList.add("cross");
        handleCellChange("cross", id, cells, setCells);
        setGo("circle");
      }
    }
  }
  return;
};

const handleCellChange = (className, id, cells, setCells) => {
  const nextCells = cells.map((cell, index) => {
    if (index === id) return className;

    return cell;
  });

  setCells(nextCells);
};
