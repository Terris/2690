import _ from 'lodash';
import React, { Component } from 'react';
import {
  acceptPiece,
  selectPiece,
  updatePiecePosition,
  hideAvailableSquares } from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/square.css';
import Piece from './Piece.js';

class Square extends Component {
  tryAcceptSquare = () => {
    if ( this.props.square.availableToSelectedPiece ) {
      const selectedPiece = _.findKey(this.props.pieces, {selected: true });
      this.props.hideAvailableSquares();
      this.props.updatePiecePosition(selectedPiece, this.props.square.id);
      this.props.acceptPiece(this.props.square.id, selectedPiece);
      this.props.selectPiece();
    }
  }

  handleClick = () => {
    this.tryAcceptSquare();
  }

  handleDragOver = (e) => {
    e.preventDefault();
    // required to be a valid drag target
  }

  handleDrop = (e) => {
    e.preventDefault();
    this.tryAcceptSquare();
  }

  renderSquare() {
    if ( this.props.square.piece ) {
      return <Piece piece={this.props.pieces[this.props.square.piece]} />
    }
  }

  render() {
    const { square } = this.props;
    return (
      <div
        className={`square ${square.piece ? 'has_piece' : ''} ${square.availableToSelectedPiece ? 'available' : ''} ${_.findKey(this.props.pieces, {selected: true }) ? 'indicator' : '' }`}
        onClick={this.handleClick}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        >
        {this.renderSquare()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { squares, pieces } = state;
  return { squares, pieces }
}
export default connect(mapStateToProps, {
  acceptPiece,
  selectPiece,
  updatePiecePosition,
  hideAvailableSquares })(Square);
