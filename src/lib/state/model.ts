import type { Move } from "./game";

export interface State {
  turn: Player;
  history: Move[];
  board: Square[];
}

export interface Square {
  piece: Piece | null;
}

export interface Piece {
  owner: Player;
  type: PieceType;
}

export enum PieceType {
  ROOK = "r",
  KNIGHT = "n",
  BISHOP = "b",
  QUEEN = "q",
  KING = "k",
  PAWN = "p",
}

export enum Player {
  BLACK = "black",
  WHITE = "white",
}

export const startingState: State = {
  turn: Player.WHITE,
  history: [],
  board: [
    { piece: { owner: Player.BLACK, type: PieceType.ROOK } },
    { piece: { owner: Player.BLACK, type: PieceType.KNIGHT } },
    { piece: { owner: Player.BLACK, type: PieceType.BISHOP } },
    { piece: { owner: Player.BLACK, type: PieceType.QUEEN } },
    { piece: { owner: Player.BLACK, type: PieceType.KING } },
    { piece: { owner: Player.BLACK, type: PieceType.BISHOP } },
    { piece: { owner: Player.BLACK, type: PieceType.KNIGHT } },
    { piece: { owner: Player.BLACK, type: PieceType.ROOK } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: { owner: Player.BLACK, type: PieceType.PAWN } },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: null },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.PAWN } },
    { piece: { owner: Player.WHITE, type: PieceType.ROOK } },
    { piece: { owner: Player.WHITE, type: PieceType.KNIGHT } },
    { piece: { owner: Player.WHITE, type: PieceType.BISHOP } },
    { piece: { owner: Player.WHITE, type: PieceType.QUEEN } },
    { piece: { owner: Player.WHITE, type: PieceType.KING } },
    { piece: { owner: Player.WHITE, type: PieceType.BISHOP } },
    { piece: { owner: Player.WHITE, type: PieceType.KNIGHT } },
    { piece: { owner: Player.WHITE, type: PieceType.ROOK } },
  ],
};
