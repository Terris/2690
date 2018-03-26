import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetBoard } from '../actions';
import '../stylesheets/board.css';
import Square from './Square.js'

class Board extends Component {
  constructor(props) {
    super(props);
    this.props.resetBoard();
  }

  renderSquares() {
    return _.map(this.props.board, square => {
      return <Square key={square.id} square={square} />
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

function mapStateToProps(state) {
  return {
    board: state.board,
  }
}
export default connect(mapStateToProps, { resetBoard })(Board);
