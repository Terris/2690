import _ from 'lodash';
import React, { Component } from 'react';
import {
  updateAvailableMoves,
  highlightAvailableSquares,
  hideAvailableSquares,
  selectPiece
} from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  componentDidMount() {
    this.props.updateAvailableMoves()
  }

  handleMouseOver = () => {
    this.props.hideAvailableSquares();
    this.props.highlightAvailableSquares( this.props.piece.availableMoves );
  }

  handleMouseOut = () => {
    if(!this.props.piece.selected) {
      this.props.hideAvailableSquares();
      let selectedPiece = _.findKey(this.props.pieces, {selected: true});
      if (selectedPiece) {
        this.props.highlightAvailableSquares( this.props.pieces[selectedPiece].availableMoves)
      }
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
