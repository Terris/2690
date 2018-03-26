import _ from 'lodash';
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { highlightAvailableMoves, hideAvailableMoves } from '../actions';
import { calculateMoves } from '../utils';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      availableMoves: []
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    var availableMoves = calculateMoves(
      this.props.piece.type, // The piece type
      this.props.square.id, // The currentPosition
      _.map( _.filter(this.props.board, s => { return s.piece !== ''  }), 'id') // occupied squares
    );
    this.setState({
      availableMoves: availableMoves
    })
  }

  handleMouseOver() {
    this.props.highlightAvailableMoves( this.state.availableMoves );
  }

  handleMouseOut() {
    this.props.hideAvailableMoves();
  }

  handleDragStart() {}
  handleDragEnd(){}
  handleDrag(){}

  render() {
    return(
      <Draggable >
        <div className="piece" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <div className="piece_ui" style={{ backgroundImage: `url(/images/${this.props.piece.img})` }}></div>
        </div>
      </Draggable>
    )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

export default connect(mapStateToProps, { highlightAvailableMoves, hideAvailableMoves })(Piece);
