import { piecesConstants } from '../constants';

export function selectPiece(piece) {
  return {
    type: piecesConstants.SELECT_PIECE,
    payload: piece
  }
};

export function updateAvailableMoves(piece, moves) {
  return {
    type: piecesConstants.UPDATE_AVAILABLE_MOVES,
    payload: {piece, moves}
  }
};
