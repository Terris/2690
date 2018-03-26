import { boardConstants } from '../constants';
import { generateBoard } from '../utils';

export function resetBoard() {
  return {
    type: boardConstants.RESET_BOARD,
    payload: generateBoard()
  };
};
