import _ from 'lodash';
import { piecesConstants } from '../constants'
import { piecesConfig } from '../config';
import { calculateMoves } from '../utils';

export default function(state = piecesConfig, action) {
  switch (action.type) {
    case piecesConstants.UPDATE_PIECE_POSITION:
      state[action.payload.piece].position = action.payload.square;
      return {...state}
    case piecesConstants.UPDATE_AVAILABLE_MOVES:
      const occupiedSquares = _.map(state, p => { return p.position  });
      _.map(state, piece => {
        state[piece.id].availableMoves = calculateMoves(piece, occupiedSquares);
      });
      return {...state }
    case piecesConstants.SELECT_PIECE:
      _.forIn(_.filter(state, { selected: true }), (value) => {
        state[value.id].selected = false;
      });
      return action.payload ? { ...state, [action.payload.id]: { ...action.payload, selected: true  } } : {...state}
    default:
      return {...state};
  }
};
