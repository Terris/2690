import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/square.css';
import Piece from './Piece.js';


class Square extends Component {

  renderSquare() {
    if ( this.props.square.piece ) {
      return <Piece piece={this.props.pieces[this.props.square.piece]} />
    }
  }

  render() {
    const { square } = this.props;
    return (
      <div className={
        `square ${square.piece ? 'has_piece' : ''}
        ${square.availableToSelectedPiece ? 'available' : ''}` }>
        {this.renderSquare()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { squares, pieces } = state;
  return { squares, pieces }
}
export default connect(mapStateToProps)(Square);
