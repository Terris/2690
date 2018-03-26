import _ from 'lodash';
import { piecesConstants } from '../constants'
import { piecesConfig } from '../config';

export default function(state = piecesConfig, action) {
  switch (action.type) {
    case piecesConstants.UPDATE_AVAILABLE_MOVES:
      return {...state, [action.payload.piece.id]: { ...action.payload.piece, availableMoves: action.payload.moves  } }
    case piecesConstants.SELECT_PIECE:
      _.forIn(_.filter(state, { selected: true }), (value) => {
        state[value.id].selected = false;
      });
      return action.payload ? { ...state, [action.payload.id]: { ...action.payload, selected: true  } } : {...state}
    default:
      return {...state};
  }
};
