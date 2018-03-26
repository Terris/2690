import _ from 'lodash';
import { boardConfig, piecesConfig } from '../config';

// Generate a Board Object
export const generateBoard = () => {
  var board = {}, i = 1 // Obj.board, iterator.
  // Check to see if square has piece
  // => ../config/piecesConfig.js
  function hasPiece(id){
    var match = _.findKey(piecesConfig, {startPos: id});
    return (typeof match !== "undefined") ? piecesConfig[match] : ''
  }
  // add [size] squares
  // to the Obj.board
  while(i <= boardConfig.size) {
    board[i] = { id: i, piece: hasPiece(i), available: false };
    i ++;
  }
  return board;
}
