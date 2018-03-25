import _ from 'lodash';
import { piecesConfig } from '../config';
import { piecesConstants } from '../constants';

// Generate a Board Object
export const generateBoard = () => {
  const size = 64; // Board Size
  var board = {}, i = 1 // Obj.board, iterator.
  // Check to see if square has piece
  // => ../config/piecesConfig.js
  function hasPiece(id){
    var match = _.findKey(piecesConfig, {startPos: id});
    return (typeof match !== "undefined") ? piecesConfig[match] : ''
  }
  // add [size] squares
  // to the Obj.board
  while(i <= size) {
    board[i] = { id: i, piece: hasPiece(i) };
    i ++;
  }
  return board;
}

export function pieceAxisPosition(position) {
  var row = Math.ceil( position / 8 );
  var col = 8 * ((position / 8 ) - (Math.ceil( (position - 8) / 8 )));
  return [row,col];
}

// Calculate Available Moves
export function calculateMoves(piece, currentPos) {
  var availableMoves = [],
    row = pieceAxisPosition(currentPos)[0],
    col = pieceAxisPosition(currentPos)[1],
    algs = [];
  switch(piece) {
    case piecesConstants.BISHOP:
      // Algorithms for each move direction
      // [up-left], [up-right], [down-right], [down-left]
      // [[math, iterations]]
      algs = [
        [-9, Math.min(col-1, row-1)],
        [-7, Math.min(row-1, 8-col)],
        [+9, Math.min(8-col, 8-row)],
        [+7, Math.min(col-1, 8-row)]
      ];
      // for each alg in algs
      // push available positions
      // to availableMoves[]
      algs.forEach(alg => {
        if ( alg[1] !== 0 ) {
          let i = 1;
          let newPos = currentPos;
          while(i <= alg[1]) {
            newPos += alg[0];
            availableMoves.push(newPos);
            i ++;
          }
        }
      });
      break;
    case piecesConstants.KNIGHT:
      // Algorithms for each move direction
      // [[math,rules]]
      algs = [
        [-10, (col > 2 && row > 1)],
        [-17, (col > 1 && row > 2)],
        [-15, (col < 8 && row > 2)],
        [-6,  (col < 7 && row > 1)],
        [+10, (col < 7 && row < 8)],
        [+17, (col < 8 && row < 7)],
        [+15, (col > 1 && row < 7)],
        [+6,  (col > 2 && row > 1)]
      ]

      algs.forEach(alg => {
        let newPos = currentPos + alg[0];
        if(alg[1]) {
          availableMoves.push(newPos);
        }
      });
      break;
    default:
      return []
  }
  //console.log(availableMoves);
  return availableMoves;
}
