import _ from 'lodash';
import { boardConfig, piecesConfig } from '../config';

/* Square Template
square = {
  1: {
    id: 1,
    piece: {},
    availableToSelectedPiece: boolean
  }
}
*/

// Generate Squares
export const squaresConfig = () => {
  var squares = {}, i = 1 // Obj.squares, iterator.

  // Check to see if square has piece
  // => ../config/piecesConfig.js
  function hasPiece(id){
    var match = _.findKey(piecesConfig, {position: id});
    return (typeof match !== "undefined") ? piecesConfig[match] : ''
  }
  // add [boardConfig.size] squares
  // to Obj.squares
  while(i <= boardConfig.size) {
    squares[i] = { id: i, piece: hasPiece(i), availableToSelectedPiece: false };
    i ++;
  }
  return squares;
}
