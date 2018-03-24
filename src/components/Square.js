import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/square.css';

import Piece from './Piece.js';


class Square extends Component {

  renderSquare() {
    if ( this.props.square.piece ) {
      return <Piece piece={this.props.square.piece} />
    }
  }

  render() {
    return (
      <div className="square">
        {this.renderSquare()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pieces: state.pieces
  }
}
export default connect(mapStateToProps)(Square);
