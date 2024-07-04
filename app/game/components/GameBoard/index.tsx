import { CellType } from "../../types/CellTypes";
import GameCell from "../GameCell";
import styles from "./index.module.css";

type Props = {
  boardValues: CellType[][];
};

export default function GameBoard({ boardValues }: Props) {
  return (
    <div className={styles.board}>
      {boardValues.map((boardRow, index) => (
        <div className={styles.boardRow} key={`row${index}`}>
          {boardRow.map((value, innerIndex) => (
            <GameCell content={value} key={`row${index}-col${innerIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
