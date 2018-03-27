import _ from 'lodash';
import { squaresConstants } from '../constants'

export default function(state = { }, action) {
  switch (action.type) {
    case squaresConstants.RESET_SQUARES:
      return action.payload
    case squaresConstants.HIGHLIGHT_AVAILABLE_SQUARES:
      action.payload.forEach(square => {
        state[square].availableToSelectedPiece = true;
      })
      return { ...state }
    case squaresConstants.HIDE_AVAILABLE_SQUARES:
      _.forIn(_.filter(state, { availableToSelectedPiece: true }), (value) => {
        state[value.id].availableToSelectedPiece = false;
      });
      return {...state }
    case squaresConstants.ACCEPT_PIECE:
      state[ _.findKey(state, { piece: action.payload.piece })].piece = '';
      state[action.payload.square].piece = action.payload.piece;
      return {...state}
    default:
      return state;
  }
};
