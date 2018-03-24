import { boardConstants } from '../constants';
import { generateBoard } from '../helpers';

export function resetBoard() {
  return {
    type: boardConstants.RESET_BOARD,
    payload: generateBoard()
  };
};
