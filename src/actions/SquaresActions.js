import { squaresConstants } from '../constants';
import { squaresConfig } from '../config';

// Set Squares to Original Config
export function resetSquares() {
  return {
    type: squaresConstants.RESET_SQUARES,
    payload: squaresConfig()
  };
};

export function highlightAvailableMoves( moves ) {
  return {
    type: squaresConstants.HIGHLIGHT_AVAILABLE_MOVES,
    payload: moves
  }
}

export function hideAvailableMoves() {
  return {
    type: squaresConstants.HIDE_AVAILABLE_MOVES
  }
}
