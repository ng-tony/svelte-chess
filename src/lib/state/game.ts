import type { State } from "./model";
import { Player } from "./model";

export interface Move {
  from: number;
  to: number;
}

//TODO
export function isValidMove(state: State, move: Move): boolean {
  return true;
}

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
