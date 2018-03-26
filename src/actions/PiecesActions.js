import { piecesConstants } from '../constants';

export function resetPieces() {
  return {
    type: piecesConstants.RESET_PIECES,
  }
};

export function selectPiece(piece) {
  return {
    type: piecesConstants.SELECT_PIECE,
    payload: piece
  }
};
