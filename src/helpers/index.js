import _ from 'lodash';
import { piecesConfig } from '../config';

// Generate a Board Object
// { a1: {x: 1, y:1}, a2: {x: 1, y: 2} }
export const generateBoard = () => {
  const size = 8;
  var board = {}, i = 0, j = 0;

  function hasPiece(pos){
    var match = _.findKey(piecesConfig, {pos: pos});
    return (typeof match !== "undefined") ? match : ''
  }

  while(i < size) {
    var letter = String.fromCharCode('a'.charCodeAt(0) + i );
    while(j < size) {
      var id = `${letter}${j + 1}`;
      board[id] = { id: id, x: i + 1, y: j + 1, piece: `${hasPiece(id)}` };
      j ++;
    }
    j = 0;
    i ++;
  }
  return board;
}
