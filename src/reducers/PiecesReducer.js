import { piecesConstants } from '../constants'

export default function(state = { }, action) {
  switch (action.type) {
    case piecesConstants.RESET_PIECES:
      return { }
    case piecesConstants.SELECT_PIECE:
      return { piece: action.payload }
    default:
      return state;
  }
};
