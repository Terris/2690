import React, { Component } from 'react';
// Constants
import { boardConstants } from '../constants'
// Board Styles
import '../stylesheets/board.css';
// Components
import Square from './Square.js'

class Board extends Component {

  renderSquares() {
    return boardConstants.BOARD_SQUARES.map(square => {
      return <Square key={square} square={square} />
    })
  }

  render() {
    return(
      <div className="board">
        {this.renderSquares()}
      </div>
    )
  }
}

export default Board;
