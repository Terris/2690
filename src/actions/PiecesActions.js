import { piecesConstants } from '../constants';

export function resetPieces() {
  return { type: piecesConstants.RESET_PIECES }
};
