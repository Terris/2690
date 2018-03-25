import _ from 'lodash';
import React, { Component } from 'react';
import { highlightAvailableMoves, hideAvailableMoves } from '../actions';
import { calculateMoves } from '../utils';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  constructor(props) {
    super(props)
    this.state = {
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

  handleDragStart(e) {
    console.log("dragging")
  }
  handleDragEnd(){
    console.log("dropped")
  }


  render() {
    return(
      <div className="piece" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <img src={`/images/${this.props.piece.img}`} alt={this.props.piece.name}
          draggable='true'
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

export default connect(mapStateToProps, { highlightAvailableMoves, hideAvailableMoves })(Piece);
