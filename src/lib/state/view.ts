import { Square, State } from "./model";

export interface ViewSquare extends Square {
  highlighted: string;
}
export interface ViewState extends State {
  board: ViewSquare[];
  selected: number;
}

//TODO
export function selectSquare(view: ViewState, index: number): ViewState {
  return view;
}
