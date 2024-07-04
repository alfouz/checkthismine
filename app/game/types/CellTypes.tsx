export const CELLTYPES = {
  empty: "empty",
  bomb: "bomb",
};

export const CELLSTATUS_TYPES = {
  hidden: "hidden",
  marked: "marked",
  viewed: "viewed",
};

export type CellType = keyof typeof CELLTYPES;
export type CellStatus = keyof typeof CELLSTATUS_TYPES;
