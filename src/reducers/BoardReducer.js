import _ from 'lodash';
import { boardConstants } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case boardConstants.RESET_BOARD:
      return action.payload
    case boardConstants.HIGHLIGHT_AVAILABLE_MOVES:
      action.payload.forEach(square => {
        state[square].available = true;
      })
      return { ...state }
    case boardConstants.HIDE_AVAILABLE_MOVES:
      _.forIn(_.filter(state, { available: true }), (value, key) => {
        state[value.id].available = false;
      });
      return {...state }
    case boardConstants.UPDATE_BOARD:
      return {...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};
