import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';
import PiecesReducer from './PiecesReducer';

const rootReducer = combineReducers({
  board: BoardReducer,
  pieces: PiecesReducer
});

export default rootReducer;
