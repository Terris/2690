import { combineReducers } from 'redux';
import SquaresReducer from './SquaresReducer';
import PiecesReducer from './PiecesReducer';

const rootReducer = combineReducers({
  squares: SquaresReducer,
  pieces: PiecesReducer
});

export default rootReducer;
