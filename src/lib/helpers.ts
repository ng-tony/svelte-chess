export interface PieceData {
  type:
    | "bp"
    | "bb"
    | "bk"
    | "bn"
    | "bq"
    | "br"
    | "wp"
    | "wb"
    | "wk"
    | "wn"
    | "wq"
    | "wr";
}
export const defaultBoard: PieceData[] = [
  { type: "br" },
  { type: "bn" },
  { type: "bb" },
  { type: "bq" },
  { type: "bk" },
  { type: "bb" },
  { type: "bn" },
  { type: "br" },
  { type: "bp" },
  { type: "bp" },
  { type: "bp" },
  { type: "bp" },
  { type: "bp" },
  { type: "bp" },
  { type: "bp" },
  { type: "bp" },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { type: "wp" },
  { type: "wp" },
  { type: "wp" },
  { type: "wp" },
  { type: "wp" },
  { type: "wp" },
  { type: "wp" },
  { type: "wp" },
  { type: "wr" },
  { type: "wn" },
  { type: "wb" },
  { type: "wq" },
  { type: "wk" },
  { type: "wb" },
  { type: "wn" },
  { type: "wr" },
];
