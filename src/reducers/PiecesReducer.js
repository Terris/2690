import { piecesConstants } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case piecesConstants.RESET_PIECES:
      return {  }
    case piecesConstants.UPDATE_PIECES:
      return {...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};
