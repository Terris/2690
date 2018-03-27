import _ from 'lodash';
import React, { Component } from 'react';
import { acceptPiece, selectPiece, updatePiecePosition } from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/square.css';
import Piece from './Piece.js';


class Square extends Component {

  handleClick = () => {
    if ( this.props.square.availableToSelectedPiece ) {
      const selectedPiece = _.findKey(this.props.pieces, {selected: true })
      this.props.updatePiecePosition(selectedPiece, this.props.square.id);
      this.props.acceptPiece(this.props.square.id, selectedPiece);
      this.props.selectPiece();
    }
  }

  renderSquare() {
    if ( this.props.square.piece ) {
      return <Piece piece={this.props.pieces[this.props.square.piece]} />
    }
  }

  render() {
    const { square } = this.props;
    return (
      <div className={`square ${square.piece ? 'has_piece' : ''} ${square.availableToSelectedPiece ? 'available' : ''}` }
        onClick={this.handleClick}>
        {this.renderSquare()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { squares, pieces } = state;
  return { squares, pieces }
}
export default connect(mapStateToProps, { acceptPiece, selectPiece, updatePiecePosition })(Square);
