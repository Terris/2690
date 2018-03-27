import { boardConstants } from '../constants'

export default function(state = {}, action) {
  switch (action.type) {
    case boardConstants.RESET_BOARD:
      return action.payload
    default:
      return state;
  }
};
