import type { State } from "./model";
import { PieceType } from "./model";
import { Player } from "./model";

export interface Move {
  from: number;
  to: number;
}

//TODO
// export function isValidMove(state: State, move: Move): boolean {
//   const isTurn = ({ board, turn }: State, { from }: Move) =>
//     board[from].piece.owner === turn;
//   const isMove = ({board}: State, move: Move) => {
//     board[from].piece,
//   }
//   return [isTurn, isMove, negate(endsInCheck)].reduce(
//     (acc, fn) => acc && fn(state, state)
//   );
// }

export function validMoves(state: State) {
  throw "Not implemented";
}

// TODO
export function validMovesFor(state: State, index: number): number[] {
  return [];
}

// TODO
export function applyMove(state: State, { from, to }: Move): State {
  // const newState = cloneDeep(state)
  const newState = { ...state, board: [...state.board] };
  newState.board[from] = { piece: null };
  newState.board[to] = state.board[from];
  newState.turn = state.turn === Player.BLACK ? Player.WHITE : Player.BLACK;
  console.log({ state, newState });
  return newState;
}

function translate(
  start: number,
  { right, down }: { right: number; down: number }
): false | number {
  const [x, y] = [(start / 8) | 0, start % 8];
  if (x + right < 0 || x + right > 7 || y + down < 0 || y + down > 7) {
    return false;
  }
  return start + right + down * 8;
}

const getMoveMap = {
  [PieceType.KNIGHT]: (state: State, from: number) => {
    return [
      { right: 1, down: 2 },
      { right: 2, down: 1 },
      { right: 1, down: -2 },
      { right: 2, down: -1 },
      { right: -1, down: 2 },
      { right: -2, down: 1 },
      { right: -1, down: -2 },
      { right: -2, down: -1 },
    ]
      .map((m) => translate(from, m))
      .filter((a) => a !== false);
  },
  [PieceType.BISHOP]: (state: State, from: number) => {
    const arr8 = Array.from({ length: 8 }, (_, i) => i);
    const translations = [
      { right: 1, down: 1 },
      { right: -1, down: 1 },
      { right: 1, down: -1 },
      { right: -1, down: -1 },
    ].map(({ right, down }) =>
      arr8
        .map((a) => ({ right: right * a, down: down * a }))
        .map((d) => translate(from, d))
    );
    const blocked = translations.map((t) =>
      t.slice(t.findIndex((v) => v === false || state.board[v] !== null))
    );
    return blocked
      .map((l) => {
        const tail = l.slice(-1)[0];
        if (tail === false) return l.slice(0, -1);
        if (state.board[tail].piece.owner !== state.board[from].piece.owner)
          return l;
        return l.slice(0, -1);
      })
      .flat();
  },
};

function knight(state: State, from: number) {
  return [
    { right: 1, down: 2 },
    { right: 2, down: 1 },
    { right: 1, down: -2 },
    { right: 2, down: -1 },
    { right: -1, down: 2 },
    { right: -2, down: 1 },
    { right: -1, down: -2 },
    { right: -2, down: -1 },
  ].filter((m) => translate(from, m));
}

function bishop(state: State, from: number) {
  const arr8 = Array.from({ length: 8 }, (_, i) => i);
  const translations = [
    { right: 1, down: 1 },
    { right: -1, down: 1 },
    { right: 1, down: -1 },
    { right: -1, down: -1 },
  ].map(({ right, down }) =>
    arr8
      .map((a) => ({ right: right * a, down: down * a }))
      .map((d) => translate(from, d))
  );
  const blocked = translations.map((t) =>
    t.slice(t.findIndex((v) => v === false || state.board[v] !== null))
  );
  return blocked
    .map((l) => {
      const tail = l.slice(-1)[0];
      if (tail === false) return l.slice(0, -1);
      if (state.board[tail].piece.owner !== state.board[from].piece.owner)
        return l;
      return l.slice(0, -1);
    })
    .flat();
}
