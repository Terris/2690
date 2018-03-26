import _ from 'lodash';
import React, { Component } from 'react';
import {
  updateAvailableMoves,
  highlightAvailableSquares,
  hideAvailableSquares,
  selectPiece
} from '../actions';
import { calculateMoves } from '../utils';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  componentDidMount() {
    var availableMoves = calculateMoves(
      this.props.piece.type, // The piece type
      this.props.piece.position, // The currentPosition
      _.map(this.props.pieces, p => { return p.position  }) // occupied squares
    );

    this.props.updateAvailableMoves(this.props.piece, availableMoves)
  }

  handleMouseOver = () => {
    this.props.hideAvailableSquares();
    this.props.highlightAvailableSquares( this.props.piece.availableMoves );
  }

  handleMouseOut = () => {
    if(!this.props.piece.selected) {
      this.props.hideAvailableSquares();
    }
  }

  handleClick = () => {
    if( this.props.piece.selected ) {
      this.props.selectPiece();
      this.props.hideAvailableSquares();
    } else {
      this.props.selectPiece(this.props.piece);
      this.props.highlightAvailableSquares( this.props.piece.availableMoves );
    }
  }

  handleDragStart = () => { }

  handleDragStop = () => { }

  render() {
    const { piece } = this.props;
    return(
      <div className={`piece ${piece.selected ? 'selected' : ''}`}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleClick}>
        <img className="piece_ui" src={`/images/${piece.img}`} alt="" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { squares, pieces } = state;
  return { squares, pieces }
}

export default connect(mapStateToProps, {
  updateAvailableMoves,
  highlightAvailableSquares,
  hideAvailableSquares,
  selectPiece
})(Piece);
