import { squaresConstants } from '../constants';
import { squaresConfig } from '../config';

// Set Squares to Original Config
export function resetSquares() {
  return {
    type: squaresConstants.RESET_SQUARES,
    payload: squaresConfig()
  };
};

export function highlightAvailableSquares( squares ) {
  return {
    type: squaresConstants.HIGHLIGHT_AVAILABLE_SQUARES,
    payload: squares
  }
}

export function hideAvailableSquares() {
  return {
    type: squaresConstants.HIDE_AVAILABLE_SQUARES
  }
}

export function setDragTarget(square_id) {
  return {
    type: squaresConstants.SET_DRAG_TARGET,
    payload: square_id
  }
}

export function clearDragTarget() {
  return {
    type: squaresConstants.CLEAR_DRAG_TARGET
  }
}

export function acceptPiece(square, piece) {
  return {
    type: squaresConstants.ACCEPT_PIECE,
    payload: {square, piece}
  }
}
