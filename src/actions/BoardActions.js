import { boardConstants } from '../constants';
import { generateBoard } from '../utils';

export function resetBoard() {
  return {
    type: boardConstants.RESET_BOARD,
    payload: generateBoard()
  };
};

export function highlightAvailableMoves( moves ) {
  return {
    type: boardConstants.HIGHLIGHT_AVAILABLE_MOVES,
    payload: moves
  }
}

export function hideAvailableMoves() {
  return {
    type: boardConstants.HIDE_AVAILABLE_MOVES
  }
}
