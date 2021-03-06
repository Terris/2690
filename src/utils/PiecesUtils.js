import { piecesConstants } from '../constants';

// pieceAxisPosition
// given [position] returns a col and row
export function pieceAxisPosition(position) {
  var row = Math.ceil( position / 8 );
  var col = 8 * ((position / 8 ) - (Math.ceil( (position - 8) / 8 )));
  return [row,col];
}

// pieceInPath
// compares new position with occupied squares
function squareIsOccupied(square, occupiedSquares){
  return occupiedSquares.includes(square)
}

// Calculate Available Moves
export function calculateMoves(piece, occupiedSquares) {
  var availableMoves = [],
    row = pieceAxisPosition(piece.position)[0],
    col = pieceAxisPosition(piece.position)[1],
    algs = [];
  switch(piece.type) {
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
          let newPos = piece.position;
          while(i <= alg[1]) {
            newPos += alg[0];
            if ( squareIsOccupied(newPos, occupiedSquares) ) {
              i = alg[1]+1;
            } else {
              availableMoves.push(newPos);
              i ++;
            }
          }
        }
      });
      return availableMoves;
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
        [+6,  (col > 2 && row < 8)]
      ]
      // for each alg in algs
      // push available positions
      // to availableMoves[]
      algs.forEach(alg => {
        let newPos = piece.position + alg[0];
        if(alg[1] && !squareIsOccupied(newPos, occupiedSquares)) {
          availableMoves.push(newPos);
        }
      });
      return availableMoves;
    default:
      return []
  }
}
