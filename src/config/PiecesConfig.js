import { piecesConstants } from '../constants';

export const piecesConfig = {
  BISHOP_BLACK_ALPHA: {
    id: "BISHOP_BLACK_ALPHA",
    type: piecesConstants.BISHOP,
    position: 59,
    img: 'bishop_yellow.svg',
    selected: false,
    availableMoves: []
  },
  KNIGHT_BLACK_ALPHA: {
    id: "KNIGHT_BLACK_ALPHA",
    type: piecesConstants.KNIGHT,
    position: 63,
    img: 'knight_yellow.svg',
    selected: false,
    availableMoves: []
  }
}
