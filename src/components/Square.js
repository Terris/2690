import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/square.css';
import Piece from './Piece.js';


class Square extends Component {

  handleClick = () => {
    console.log(this.props.square)
  }

  handleMouseOver = () =>{
    console.log(this.props.square.id)
  }

  renderSquare() {
    if ( this.props.square.piece ) {
      return <Piece piece={this.props.square.piece} />
    }
  }

  render() {
    const { square, pieces } = this.props;
    return (
      <div className={`square ${square.piece ? 'has_piece' : ''} ${square.availableToSelectedPiece ? 'available' : ''}`}
        onClick={this.handleClick}
        //onDragEnter={this.handleMouseOver}
        >
        {this.renderSquare()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    squares: state.squares,
    pieces: state.pieces
  }
}
export default connect(mapStateToProps)(Square);
