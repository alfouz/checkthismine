import { CellType } from "../../types/CellTypes";
import BombIcon from "./icons/BombIcon";
import styles from "./index.module.css";

type Props = {
  content: CellType;
};

export default function GameCell({ content }: Props) {
  return (
    <div className={styles.cell}>
      {content === "bomb" ? <BombIcon /> : <div>{""}</div>}
    </div>
  );
}
