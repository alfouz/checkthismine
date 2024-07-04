"use client";
import generateBoard from "../utils/generateBoard";
import GameBoard from "./components/GameBoard";
import styles from "./page.module.css";
import { CellType } from "./types/CellTypes";

const testBoard: CellType[][] = [
  ["bomb", "empty", "empty", "bomb"],
  ["bomb", "empty", "empty", "bomb"],
  ["bomb", "empty", "empty", "bomb"],
  ["bomb", "empty", "empty", "bomb"],
];

export default function Game() {
  const example = generateBoard(12, 12);
  return (
    <main className={styles.main}>
      Game under construction
      <GameBoard boardValues={example}></GameBoard>
    </main>
  );
}
