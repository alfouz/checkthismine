import { CellType } from "../game/types/CellTypes";

const generateBoard = (size: number, bombs: number) => {
  const totalSpaces = size * size;
  let bombsRemaining = bombs;

  const boardArray = Array.from(
    { length: totalSpaces },
    () => "empty" as CellType
  );

  while (bombsRemaining) {
    const currentPosition = Math.floor(Math.random() * totalSpaces);
    if (boardArray[currentPosition] === "empty") {
      boardArray[currentPosition] = "bomb";
      bombsRemaining = bombsRemaining - 1;
    }
  }

  return Array.from({ length: size }, (v, i) =>
    boardArray.slice(i * size, i * size + size)
  );
};

export default generateBoard;
