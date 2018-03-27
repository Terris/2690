import { piecesConstants } from '../constants';

export function selectPiece(piece) {
  return {
    type: piecesConstants.SELECT_PIECE,
    payload: piece
  }
};

export function updatePiecePosition(piece, square) {
  return {
    type: piecesConstants.UPDATE_PIECE_POSITION,
    payload: {piece, square}
  }
};

export function updateAvailableMoves() {
  return {
    type: piecesConstants.UPDATE_AVAILABLE_MOVES
  }
};
