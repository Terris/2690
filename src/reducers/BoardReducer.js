import { boardConstants } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case boardConstants.RESET_BOARD:
      return action.payload
    case boardConstants.UPDATE_BOARD:
      return {...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};
