import _ from 'lodash';
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { highlightAvailableMoves, hideAvailableMoves, resetPieces, selectPiece } from '../actions';
import { calculateMoves } from '../utils';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isMoving: false,
      selected: false,
      availableMoves: []
    }
  }

  componentDidMount() {
    var availableMoves = calculateMoves(
      this.props.piece.type, // The piece type
      this.props.piece.position, // The currentPosition
      _.map( _.filter(this.props.squares, s => { return s.piece !== ''  }), 'id') // occupied squares
    );
    this.setState({
      availableMoves: availableMoves
    })
  }

  handleMouseOver = () => {
    this.props.highlightAvailableMoves( this.state.availableMoves );
  }

  handleMouseOut = () => {
    if(!this.state.selected){
      this.props.hideAvailableMoves();
    }
  }

  handleClick = () => {
    if (this.state.selected) {
      this.setState({selected: false});
      this.props.resetPieces();
      this.props.hideAvailableMoves( this.state.availableMoves );
    } else {
      this.setState({selected: true});
      this.props.resetPieces();
      this.props.highlightAvailableMoves( this.state.availableMoves );
      this.props.selectPiece(this.props.piece);
    }
  }

  handleDragStart = () => { }

  handleDragStop = () => { }

  render() {
    return(
      <div className={`piece ${this.state.selected ? 'selected' : ''}`}
        //draggable="true"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleClick}>
        <img className="piece_ui" src={`/images/${this.props.piece.img}`} alt="" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    squares: state.squares
  }
}

export default connect(mapStateToProps, {
  highlightAvailableMoves,
  hideAvailableMoves,
  resetPieces,
  selectPiece
})(Piece);
