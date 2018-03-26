import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetSquares } from '../actions';
import '../stylesheets/board.css';
import Square from './Square.js'

class Board extends Component {

  constructor(props) {
    super(props);
    this.props.resetSquares();
  }

  renderSquares() {
    return _.map(this.props.squares, square => {
      return <Square key={square.id} square={square} />
    })
  }

  render() {
    const { pieces } = this.props;
    return(
      <div className={`board ${pieces.piece ? 'piece_selected' : ''}`}>
        {this.renderSquares()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { squares, pieces } = state;
  return { squares, pieces };
}
export default connect(mapStateToProps, { resetSquares })(Board);
